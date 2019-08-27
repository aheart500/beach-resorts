import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking, FaShuttleVan , FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    state = {
        services : [
             {
                 icon : <FaCocktail />,
                 title : 'Free Cocktail',
                 info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id consequat nulla. Cras laoreet hendrerit dui, ut maximus sapien pharetra ut.'
             },
             {
                icon : <FaHiking />,
                title : 'Endless Hiking',
                info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id consequat nulla. Cras laoreet hendrerit dui, ut maximus sapien pharetra ut.'
            },
            {
                icon : <FaShuttleVan />,
                title : 'Free Shuttle',
                info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id consequat nulla. Cras laoreet hendrerit dui, ut maximus sapien pharetra ut.'
            },{
                icon : <FaBeer />,
                title : 'Strongest Beer',
                info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id consequat nulla. Cras laoreet hendrerit dui, ut maximus sapien pharetra ut.'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services' />
                <div className='services-center'>
                    {this.state.services.map((item,index) =>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
