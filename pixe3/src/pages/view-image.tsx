import React from 'react';
class ViewImagePage extends React.Component {


    componentDidMount() {

        // document.getElementsByTagName('head')[0].appendChild(newScript); 
        // const px1 = new pixelit();
        // px1.draw().pixelate();
        // console.log('run pixelit');
        // console.log('aalib' , aalib );
        console.log('component did mount in view-image!');

    }


    render() {
        return (
            //view image section 
            <div className="view-image-page">

                <section className="py-5">

                    <div className="container px-4 px-lg-5 my-5">
                        <h3 className=" fw-bolder col-12" ref="post_title">your masterpiece title</h3>

                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-md-8">



                                <div id="canvas-wrapper" className="card-img-top mb-5 mb-md-0">
                                    <canvas id="canvas" ref="canvas"></canvas>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="post_content col-12"
                                    ref="post_content">asdasdasd sad asdas djasldjasl dasldas as da</div>

                            </div>
                        </div>
                    </div>
                </section>



            </div> //end all section 







        )//return html 
    }

}

export default ViewImagePage;

