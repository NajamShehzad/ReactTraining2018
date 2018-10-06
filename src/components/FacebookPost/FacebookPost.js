import React from 'react';
import Info from './info';
import FbGrid from 'react-fb-image-grid';





class FacebookPost extends React.Component {
    state = {
        images:
            [
                'https://qph.fs.quoracdn.net/main-qimg-2d4db7de3d89fdb06cd1924a26cae37c'
                , 'https://pre00.deviantart.net/585d/th/pre/i/2017/332/6/2/gogeta_ultra_instinct_by_squadanime-dbv4t4u.jpg'
                , 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/28168271_1887608541312597_2945538303616637147_n.jpg?_nc_cat=107&oh=6153d9f84f970e468f6be9acc9827207&oe=5C1797DB'
                , 'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/28168271_1887608541312597_2945538303616637147_n.jpg?_nc_cat=107&oh=6153d9f84f970e468f6be9acc9827207&oe=5C1797DB'
                , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYntEP0XqGYcJbcDbcVYOK5JVzXrnJUk4nlT2PDx7DWKhT9-I'
            ]
    }

    render() {
        return (
            <div >
                <div style={{ marginLeft: '30%', }}>
                    <div>
                        <Info />
                    </div>
                    <div style={{ width: 500 }} >
                        <div style={{ clear: "both" }}>
                            About Our New Facebook Component that will look Good
                            About Our New Facebook Component that will look Good
                            About Our New Facebook Component that will look Good
                        </div>
                    </div>
                </div>
                <FbGrid images={this.state.images} width={40} />
            </div>
        )
    }
}

const style = {
    mainDiv: {
        marginLeft: 'auto'
    }
}


export default FacebookPost;