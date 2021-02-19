import React from "react";

// eslint-disable-next-line react/prefer-stateless-function
class akw extends React.Component{
    render(): JSX.Element{
        return(
           <div className = "standard-background">
                <h1 className = "header">AKW</h1>
                <div>                
                    <p className = "sdg13playinformation">&ldquo;Nuclear&rdquo; is often used negatively but there truly are some positive things to say about this kind of energy. A&nbsp;<span className = "red">big part</span>&nbsp;of the worldwide used energy is&nbsp;<span className = "red">already green</span>&nbsp;(in 2017 it was 24,3 % on trend increasing) but the&nbsp;rest&nbsp;is produced in&nbsp;<span className = "red">nuclear power plants</span>&nbsp;(the share in the complete amount of produced energy differs from country to country rather extreme as there are ones like Germany, which try to&nbsp;<span className = "red">reduce&nbsp;</span>the usage of this power as well as countries like the US which see a&nbsp;<span className = "red">big potential</span>&nbsp;in nuclear power) and&nbsp;<span className = "red">coal-fired power stations</span>.A reason why nuclear power is <span className = "red">not banned</span>&nbsp;by now,&nbsp;<span className = "red">even though</span>&nbsp;there had been big and well-known&nbsp;<span className = "red">catastrophes&nbsp;</span>like Fukushima and Chernobyl, is the fact that it does&nbsp;<span className = "red">not produce any emissions</span>. But the people learned from these accidents and so the&nbsp;safety <span className = "red">regulations are higher</span>&nbsp;than they have ever been before. Nevertheless, we have&nbsp;no idea&nbsp;how to&nbsp;<span className = "red">handle the atomic waste</span>. Yet the biggest issue with&nbsp;<span className = "red">coal-fired power stations</span>&nbsp;is beyond doubt the&nbsp;<span className = "red">amount of produced emission</span>&nbsp;from gases like Carbon Dioxide. But why do people still use such technics? Basically, coal-fired power stations are still in use because they produce much&nbsp;<span className = "red">more energy than any other energy source</span>&nbsp;and so cannot be replaced that easily.&nbsp;</p>
                </div>
           </div>
        );
    }
}

export default akw