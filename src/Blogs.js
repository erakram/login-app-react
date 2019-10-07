// import React from 'react'

// const Blogs = () => {
//     return (
//         <div className="card z-depth-0 project-summery">
//             <div className="card-content grey-text text-darken-3">
//                 <span className="card-title">Blog</span>
//                 <p>Blog Name</p>
//                 <p className="grey-text">Blog Content</p>
//             </div>
//         </div>
//     )
// }

// export default Blogs


import React, { Component } from 'react';

class Blogs extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'ggggJordan Belfort'
    }
  }



  getData(){
    fetch('http://localhost:8080/notes')
                .then(response => {
                    if (!response.ok) {
                        throw Error('Network request failed.')
                    }
                    return response;
                })
                .then(data => data.json())
                .then(data => {
                    this.setState({
                        content: data[0].content
                    });
                    console.log('parsed json', data);
                    console.log('Title', data[0].title);
                    console.log('Title', data[1].title);
                    console.log('Title', data[2].title);
                    // var b = data[0].title;

                }, (ex) => {
                    this.setState({
                        requestError : true
                    });
                    console.log('parsing failed', ex)
                })
    // setTimeout(() => {
    //   console.log('Our data is fetched');
    //   this.setState({
    //     data: 'Hello Wall Street'
    //   })
    // }, 1000)
  }

  
//   handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('http://localhost:8080/notes', {
//         method: 'GET',
//         Origin: 'http://localhost:8080',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//        body: JSON.stringify( {
//     firstname: this.state.firstname,    
//     lastname: this.state.lastname,
//     email: this.state.email,
//     password: this.state.password
// })
//    }).then(res => res.json())
//    .then((data)=> {
//     // this.props.history.push('/');
//    })
//    .catch ((error) => {
//                 this.setState({ error: error });
//                 console.log('Error')
//             })
// }

  componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <div>
        {this.state.data}
        {this.state.content}
    </div>
    )
  }
}

export default Blogs;