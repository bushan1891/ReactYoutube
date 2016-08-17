import React, {Component} from 'react';
// function based component
/*const SearchBar = () => {
    return <input / > ;
}
*/
// class based component React.Component == {Component} in import
class SearchBar extends Component {
    // called everytime this component is instanciated
    constructor(props) {
        // Component has its own constructor calling parent constructor
        super(props);
        // to record the state of the component each instance of component will have its own state creating
        // a state inside constructor
        this.state = {term: 'Enter some text'};
        // creating a state
    }
    // this.setState() is a predefined react function to change state variable
    render() {
        return ( < div >
          < input value = {this.state.term}onChange = {event => this.setState({term: event.target.value})} / >
          Value of the input : {this.state.term}
         < /div >
        );
    }

    // use appropeiate names
    // on input changes
    // any browser activity is pushed to our function called event
    /* onInputChange(event) {
            console.log(event.target.value);
        } */
}


export default SearchBar;
