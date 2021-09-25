import React, {Component} from "react"

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImg: []
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImg: memes
                })
            })
    }

    handleChange = event =>{
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event =>{
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImg.length)
        const randomMeme = this.state.allMemeImg[randomNum].url
        this.setState({
            randomImg: randomMeme
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="topText"
                    value={this.state.topText}
                    placeholder="Top Text"
                    onChange={this.handleChange}
                    />
                    <input
                    type="text"
                    name="bottomText"
                    value={this.state.bottomText}
                    placeholder="Bottom Text"
                    onChange={this.handleChange}
                    />

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                <br />
                    <button>Genrate</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator