import {Component} from "react"

export class SearchResults extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>  {this.props.location.state.query}</div>
        )
    }
}
export default SearchResults