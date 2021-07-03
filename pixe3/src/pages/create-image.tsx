import React from 'react';
import { render } from 'react-dom';
import ScriptTag from 'react-script-tag'
import pixelitCDC from '../jslib/pixelit';

// const aalib = require('aalib.js');
// const pixelit = require('../jslib/pixelit');

// window.aalib = aalib;
// window.pixelit = pixelit;

class CreateImagePage extends React.Component {

    shouldComponentUpdate() {
        return false;
    }
    componentWillMount() {

    }
    componentDidMount() {

        // document.getElementsByTagName('head')[0].appendChild(newScript); 
        // const px1 = new pixelit();
        // px1.draw().pixelate();
        // console.log('run pixelit');
        console.log('pixelit111', pixelitCDC);
        // console.log('aalib' , aalib );
        console.log('component did mount in create-image!');



    }

    componentWillReceiveProps(nextProps) {

    }


    componentDidMount() {
        // const px1 = new pixelit();
        // px1.draw().pixelate();
        // console.log('run pixelit');

        console.log('component did mount in create-image!');
    }
    processImage() {
        let img = this.refs.imgOrigin.files[0];
        let imgtemp = this.refs.imgtemp;
        let reader = new FileReader();
        let mainCanvas = this.refs.canvas;

        reader.readAsDataURL(img);

        console.log("main canvas", mainCanvas);


        reader.addEventListener("load", function () {

            console.log('processed image ', reader.result);
            imgtemp.src = reader.result;


            imgtemp.addEventListener("load", function () {
                const px = new pixelitCDC({
                    to: mainCanvas,
                    from: imgtemp,
                    scale: 50,
                    // palette : [[r,g,b]]
                });
                px.draw().pixelate().convertPalette();


                //save data url 
                console.log("data canvas: ", mainCanvas.toDataURL());
            });



            // aalib.read.image.fromURL(reader.result )
            // .map(aalib.aa({ width: 530, height: 160 }))
            // .map(aalib.filter.contrast(0.9))
            // .map(aalib.render.html({ el: mainCanvas, fontSize:4, color:'red' }))
            // .subscribe();


        });//render img load 


    }

    saveImage() {
        console.log("data tobe uploaded", this.refs.canvas.innerHTML);

    }

    render() {
        return (
            <div className="create-image-page">


                <section className="py-5">

                <h2>Make your masterpiece!  </h2>

                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-md-6">

                                <div id="imgPreview">
                                    Upload an image:
                                    <input className="col-8" type="file" accept="image/*" ref="imgOrigin" />
                                    <button className="col-4" ref="convert" id="convert" onClick={() => this.processImage()}>Convert now </button>

                                    <img ref="imgtemp" src="" alt="" id="imagetemp" />
                                </div>

                                <div id="canvas-wrapper"  className="card-img-top mb-5 mb-md-0">
                                    <canvas id="canvas" ref="canvas"></canvas>
                                </div>
                                
                            </div>
                            <div className="col-md-6">

                                <input className=" fw-bolder col-12" ref="post_title" placeholder="your masterpiece title" />
                                
                                <textarea className="post_content col-12" 
                                ref="post_content"></textarea>

                                <div className="d-flex">
                                    <button ref="save"
                                     id="save"
                                      onClick={() => this.saveImage()}
                                      className="btn btn-outline-dark flex-shrink-0 col-12 ">Save!  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>




        )//return html 
    }

}

export default CreateImagePage;

