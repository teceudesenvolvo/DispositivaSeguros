import React, { Component } from 'react';



//Imagens

// Icones
import {


} from 'react-icons/fa';

// Components
import SlideFeacures from '../componets/slideFeactures';


//mudança de páginas

class homeDashboard extends Component {
    render() {
        return (

            <div className='App-header' >
                <div className='Home-Dach'>
                    <div className='headerDach'>
                    </div>

                    <div className='HomeDesktopCarrosel'>
                            <SlideFeacures />
                        </div>
                        
                    </div>
                    


            </div>
        );
    }
}

export default homeDashboard;