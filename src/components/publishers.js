import React, { Component } from 'react';

class Publisher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            limit: 10,
            tracks: []
        };
        this.handleEventScroll = this.handleEventScroll.bind(this);
    }

    handleEventScroll() { 
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if(this.state.limit < 100) {
                this.setState({
                    limit: this.state.limit+5
                })
            }
            this.fetchAPI();
        }
    }
    
    fetchAPI() {
        var url="https://www.stellarbiotechnologies.com/media/press-releases/json?limit=" + this.state.limit;

        fetch(url)
        .then(res => res.json())
        .then(res => {
            var newArr = [];
            newArr.concat(res.news).concat(newArr);
            this.setState({
                tracks: res.news,
            });
        });
    }

    componentDidMount() {
        this.fetchAPI();
        window.addEventListener("scroll", this.handleEventScroll, true)
    }

    render() {
        const simple = this.state.tracks.map( (x, i) => {
            return(
                    <div className="t_body" key={i}>
                        <div className="title col">  {x.title}  </div>
                        <div className="date col">   {x.published.slice(0, 10)} </div>
                        <div className="time col">   {x.published.slice(-8)}  </div>
                    </div>
            );
        });

        return(
            <div className="header">
            <h1>Publishers</h1>
            <div className="publishers">
                <div className="theader">
                    <div className="header"> Title</div>
                    <div className="header"> Date </div>
                    <div className="header"> Time </div>
                </div>
                    {simple}
                </div>
            </div>
        );
    }
}

export default Publisher;