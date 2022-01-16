import React from "react";


export default class BjApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            deck : [],
            player:{
                count: 0,
                hand: []

            },
            dealer:{
                count: 0,
                hand: []
            }
        }
    }

    resetDeck(){
        
        let suit = ["♣","♤","♥","♦"];
        let rank = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        for(let i = 0;i<suit.length;i++){
            for(let k = 0;k<rank.length;k++){
                this.state.deck.push({suit:suit[i],rank:rank[k]});
            }
        }
        



    }
    newGame(){
        let deck = this.resetDeck();


        const {newdeck, newPlayer,newDealer} =this.gameStart(deck);
        this.setState({
            deck: newdeck,
            player: newPlayer,
            dealer: newDealer,
        })

    }

    gameStart(deck){
        console.log()
        let yourCards = [];
        let dealerCards =[];
        yourCards.push(this.randCard(this.state.deck))
        dealerCards.push(this.randCard(this.state.deck))
        yourCards.push( this.randCard(this.state.deck))
        let player = {
            count: this.count(yourCards),
            hand: yourCards,
        }
        let dealer = {
            count: this.count(dealerCards),
            hand: dealerCards,
        }
        return {deck,player,dealer}
        
    }




    randCard(deck){
        let selectedCard = deck[Math.floor(Math.random()*deck.length)];
        let newDeck = deck.splice(selectedCard,1)
        
        
        return selectedCard;

    }
    count(hand){
        console.log(this.state.player.hand);
        let handVal = 0;
        for(let i =0;i<hand.length;i++){
            if(hand[i].rank === "A"){
                handVal ++;
            }else if((hand[i].rank === "J") ||(hand[i].rank === "Q")||(hand[i].rank === "K")){
                handVal = handVal + 10;
            }else{
                handVal = handVal + parseInt(hand[i].rank);
            }
        }
            this.state.playerCount = handVal;
            console.log(handVal);
            return handVal;
        
    }
    componentWillMount(){
       this.newGame();

    }




    render(){
       
        return(
            <div>
               
                <div className="buttons">
                    <button onClick={() => {this.startNewGame()}}>New Game</button>
                    <button onClick={() => {this.hit()}}>hit</button>
                </div>
            </div>
        )
        

    }



}