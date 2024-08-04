In this project,
 routing of a webpage is done using a third party library react-router-dom
 since react is a single page dom, there is no concept of refreshing
 so new elements are injected into the dom 
    new components are created reused. There are some components that are kept on every page

    created a layout component taht uses same components to change something in between header and footer
    <outlet /> is used which is replaced by the components given in the route itself

    handled the routes containing data in url, using useParams from react-router-dom 
    handled api in routes itself using useLoaderData from react-router-dom 