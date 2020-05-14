import React, { Component } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import Image from "../components/Image";
import planes from "../planes.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class Main extends Component {
  state = {
    planes,
    clicked: [],
    score: 0,
    topScore: 0,
    status: ""
  };

  componentDidMount() {}

  shuffleImages = (id) => {
    let clickedIds = this.state.clicked;

    if (clickedIds.includes(id)) {
      this.setState({
        clicked: [],
        score: 0,
        status: "Game Over! You lost.",
      });
      return;
    } else {
      clickedIds.push(id);
      if (clickedIds.length === 6) {
        this.setState({
          score: 6,
          status: "You Won!",
          clicked: [],
        });
        console.log("You Win");
        return;
      }

      //reset everything
      this.setState({
        planes,
        clickedIds,
        score: clickedIds.length,
        status: "Correct Guess, pick again!",
      });

      
      for (let i = planes.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [planes[i], planes[random]] = [planes[random], planes[i]];
      }
    }
  };

  render() {
    return (
      <div>
        <TopNav topScore={this.state.topScore} score={this.state.score} status={this.state.status}/>
        <h1>Clicky Game!</h1>
        <h3>
          Click on an image to earn points, but don't click on any more than
          once!
        </h3>
        <Container>
          <Row>
              {this.state.planes.map((plane) => (
                <Image
                shuffleImages={this.shuffleImages}
                  id={plane.id}
                  key={plane.id}
                  image={plane.image}
                />
              ))}
          </Row>
        </Container>
        <BottomNav />
      </div>
    );
  }
}

export default Main;
