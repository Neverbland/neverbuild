import React from 'react';

// This make debugging easier. Components will show as withSSR(MyComponent) in
// react-dev-tools.
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// This is a Higher Order Component that abstracts duplicated data fetching
// on the server and client.
export default function (Page) {
  class withSSR extends React.Component {
    static getInitialData(ctx) {
      // Need to call the wrapped components getInitialData if it exists
      return Page.getInitialData
        ? Page.getInitialData(ctx)
        : Promise.resolve(null);
    }

    constructor(props) {
      super(props);
      this.state = {
        data: props.initialData,
        isLoading: false
      };
      this.ignoreLastFetch = false;
    }

    componentDidMount() {
      if (!this.state.data) {
        this.fetchData();
      }
    }

    componentWillUnmount() {
      this.ignoreLastFetch = true;
    }

    fetchData = () => {
      // if this.state.data is null, that means that the we are on the client.
      // To get the data we need, we just call getInitialData again on mount.
      if (!this.ignoreLastFetch) {
        console.log('refetching');
        this.setState({ isLoading: true });
        this.constructor.getInitialData({ match: this.props.match }).then(
          data => {
            this.setState({ data, isLoading: false });
          },
          error => {
            this.setState(() => ({
              data: { error },
              isLoading: false
            }));
          }
        );
      }
    };

    render() {
      // Flatten out all the props.
      const { initialData, ...rest } = this.props;

      //  if we wanted to create an app-wide error component,
      //  we could also do that here using <HTTPStatus />. However, it is
      //  more flexible to leave this up to the Routes themselves.
      //
      // if (rest.error && rest.error.code) {
      //   <HttpStatus statusCode={rest.error.code || 500}>
      //     {/* cool error screen based on status code */}
      //   </HttpStatus>
      // }

      return (
        <Page
          {...rest}
          refetch={this.fetchData}
          isLoading={this.state.isLoading}
          {...this.state.data}
        />
      );
    }
  }

  withSSR.displayName = `withSSR(${getDisplayName(Page)})`;
  return withSSR;
}
