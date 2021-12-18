// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";

// eslint-disable-next-line react/prefer-stateless-function
export class SDG13_Quiz_Tips extends React.Component {

    render(): JSX.Element {
        return (
            <div>
                <div className="header">Personal tips</div>
                <div className="questionText">
                    <div className="text">
                        <p>- drive as groups when you have the same destination</p>

                        <p>- use public transportation whenever possible</p>

                        <p>
                            - and as often: try to buy local and seasonal food and products to keep transportation
                            routes as short as possible
                        </p>

                        <p>- also, avoid flying and rather travel by train even if it takes longer</p>

                        <p>
                            - if you have the possibility to drive an electric car or even to drive a car run by
                            hydrogen, please do so or help to improve those by spreading the idea behind them or even
                            developing a way that those technologies become accessible for everybody
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
