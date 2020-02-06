import React from 'react';
import axios from 'axios';

const giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=2sljnIvSpLv4yRqDXpe8bREVwzMnU7qC&q=laser&limit=25&offset=0&rating=G&lang=en`;
/*

a button that runs a helper function that console.log(something)

empty array in state

update the function so it adds 'hello' to the state array

run the function everytime you click the button

*/

class GiphyApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            giphies: [],
        }
    }

    render() {
        return(
            <div>
                <button onClick={this._getGiphy}>
                    <h1>click to add 'hello' to state</h1>
                </button>
                    {/* <ul>
                        {this.state.giphies.map(item=><li>{item}</li>)}
                    </ul> */}
            </div>
        )
    }

    _getGiphy=()=> {
        
        axios.get(giphyURL)
            .then(res=> {
                // console.log(res.data.data[0].images)
                console.log(res.data.data[0].images.downsized_large.url)
                this.setState({
                    giphies: [
                        ...this.state.giphies,
                        res.data.data[0].images.downsized_large
                    ]
                })
            })
            .catch(err=>console.log('No giphy for you :/'))

    }

}

export default GiphyApp;