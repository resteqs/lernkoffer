// eslint-disable-next-line unicorn/filename-case
import * as React from "react";

// eslint-disable-next-line react/prefer-stateless-function
export class tutorial_13_u3 extends React.Component {
    render(): JSX.Element {
        return (
            <div className = "text">
                <p className = "header">Goal 13: CO<sub>2</sub> Quiz</p>
                <p>
                    As you know at the moment, we are taking a look at climate change and what we can do to slow it down
                    or even stop and reverse it.
                </p>
                <p>
                    A huge part of this is the topic of transportation. Everything and everybody needs to be transported
                    in several ways to different locations.
                </p>
                <p>
                    In the following, you will have to decide which mean of transport produces more emissions (gases
                    produced by a lot of things e.g. cars while their engines are running). You have the choice between
                    two means of transportation.
                </p>
                <p>
                    To make it more fun, we make a game out of it. Choose three corners or places you want to use. Every
                    question has three possible answers. The people who think object number one produces more of the
                    asked gas go to the first corner/spot. Those who think the second object frees more of this gas go
                    to the second corner/spot, and those of you who think they both free the same amount of gas go to
                    the third corner/spot.
                </p>
                <p>
                    After everybody chose an answer take a look at the solution and maybe those of you who chose
                    correctly can explain their thoughts to those who stood in the other corners/spots
                </p>
                <a className = "greenButton" href="/sdg13/u3/question1">Got it</a>
            </div>
        );
    }
}
