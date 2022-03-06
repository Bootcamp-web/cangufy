import React from 'react';
import styled  from 'styled-components';
import { Card } from 'react-bootstrap';

const DivParent =styled.div`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`
const DivNanny =styled.div`
color: red;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid red;
border-radius: 3px;
`

const DivWrap =styled.div`
display:flex;
flex-wrap: wrap
`

const MatchCard = ({match})=>{
    console.log("matchcard",match)
    return(

        <Card className="card" >
            <div className="card-body">
                <h5 className="card-title">Match Booking</h5>
                <p className="card-text"></p>
                 {match 
                    ? <DivWrap className="match-data" >
                        <DivParent className='parent'>
                            <h2>Parent</h2>
                            <p>{match.parent.firstName}</p>
                            <p>{match.parent.lastName}</p>
                            <p>{match.parent.email}</p>
                            <p>{match.parent.location}</p>
                            <p>{match.parent. additionalFeatures}</p>
                        </DivParent>
                        <DivNanny className='nanny'>
                            <h2>Nanny</h2>
                            <p>{match.nanny.firstName}</p>
                            <p>{match.nanny.lastName}</p>
                            <p>{match.nanny.email}</p>
                            <p>{match.nanny.location}</p>
                            <p>{match.nanny.additionalFeatures}</p>
                        </DivNanny>
                    </DivWrap>
                    :<div>No match</div>
                 }
            </div>
        </Card>
    )
}

export default MatchCard