function MyButton(props){
    const[isClicked, setIsClicked] = React.useState(false);
    return Rect.craeateElement(
        'button',
        {onClick: () => setIsClicked(true)},
        isClicked ? 'Clicked' : 'Click here!'
    )
}


const domContainer  = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton),domContainer);