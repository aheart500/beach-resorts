import React, { Component } from 'react'
import Banner from '../components/Banner'
import {RoomContext} from '../Context'
import defaultBG from '../images/room-1.jpeg'
import {Link} from 'react-router-dom'
import StyledHeader from '../components/StyledComponents'
export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug : this.props.match.params.slug,
            defaultBG
        }
    }
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        if (!room){
            return (
                <div className='error'>
                    <h3>No such room could be found...</h3>
                    <Link to='/rooms' className='btn-primary' >
                        back to rooms
                    </Link>
                </div>
            )
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg,...defalutImages] = images;
        return (
            <>
                <StyledHeader img={mainImg || this.state.defaultBG}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHeader>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {defalutImages.map((image,index) => {return <img src={image} key={index} alt={name} />})}
                    </div>
                    <div className='single-room-info'>
                        <article className='desc'>
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className='info'>
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : ${size} SQFT</h6> 
                            <h6>max capacity : {
                                capacity > 1 ? `${capacity} people` : `${capacity} person`
                            }</h6>
                            <h6>
                                {pets? 'pets allowed' : 'no pets allowed'}
                            </h6>
                            <h6>
                                {breakfast && 'free breakfast included'}
                            </h6>
                        </article>
                    </div>
                    <section className="room-extras">
                            <h6>extras</h6>
                            <ul className="extras">
                                {extras.map((item,index) => {
                                    return <li key={index} >- {item}</li>
                                })}
                            </ul>
                        </section>
                </section>
            </>
        )
    }
}
