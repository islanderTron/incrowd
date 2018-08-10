import React, { Component } from 'react';
// import InfiniteScroll from 'react-infinite-scroller';
// import qwest from 'qwest';


class Publisher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null
        };
    }

    componentDidMount() {
        var url="https://www.stellarbiotechnologies.com/media/press-releases/json";
        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                tracks: res.news
            });
        })
    }

    // loadItems(page) {
    //     var self = this;
        
    //     var url="https://www.stellarbiotechnologies.com/media/press-releases/json";

    //     if(this.state.nextHref) {
    //         url = this.state.nextHref;
    //     }

    //     qwest.get(url)
    //     .then(function(xhr, resp) {
    //         var tracks = self.state.tracks;
    //         resp.news.map(track => {
    //             console.log(track);
    //             tracks.push(track.news);
    //             this.setState({
    //                 tracks: tracks,
    //                 hasMoreItems:false
    //             })
    //         })
    //     });
    // }

    render() {
        const loader = <div className="loader">Loading ...</div>;
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
                    {/* <InfiniteScroll 
                        pageStart={0}
                        loadMore={this.loadItems.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={loader}>
                        
                        {simple}

                    </InfiniteScroll> */}
                </div>
            </div>
        );
    }
}

export default Publisher;