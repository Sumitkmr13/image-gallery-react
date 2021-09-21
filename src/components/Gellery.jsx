import React from 'react'
import './Gallery.css'

export default function Gellery() {
    function display(event) {
        const modalImg = document.getElementById("img01");
        const modal = document.getElementById('myModal');
        modalImg.src = event.target.src;
        modal.style.display = "block";
    }
    function close() {
        const modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
    return (
        <div className="gallery">
            <div className="img">
                <img src="https://res.cloudinary.com/dhfpcwwq0/image/upload/v1632128280/project/st-petersburg-4805301_1280_zrxk9a.jpg" alt="LuidmilaKot" onClick={display}/>
                <div className="by">Image by: <strong>LuidmilaKot</strong> </div>
            </div>
            <div className="img">
                <img src="https://res.cloudinary.com/dhfpcwwq0/image/upload/v1632128634/project/sunset-5536777_1280_iu4myu.jpg" alt="" onClick={display}/>
                <div className="by">Image by: <strong>Leolo212</strong> </div>
            </div>
            <div className="img">
                <img src="https://res.cloudinary.com/dhfpcwwq0/image/upload/v1632128776/project/sunset-5800386_1280_ui6l3n.jpg" alt="" onClick={display}/>
                <div className="by">Image by: <strong>chrisstenger</strong> </div>
            </div>
            <div className="img">
                <img src="https://res.cloudinary.com/dhfpcwwq0/image/upload/v1632128913/project/beach-6292382_1920_q6a1cp.jpg" alt="" onClick={display}/>
                <div className="by">Image by: <strong>Kanenori</strong> </div>
            </div>
            <div className="img">
                <img src="https://res.cloudinary.com/dhfpcwwq0/image/upload/v1632129241/project/field-6574455_1920_xpgmr0.jpg" alt="" onClick={display}/>
                <div className="by">Image by: <strong>LagrangeHervé</strong> </div>
            </div>
            <div className="img">
                <img src="https://res.cloudinary.com/dhfpcwwq0/image/upload/v1632129320/project/port-6587129_1920_vahw6d.jpg" alt="" onClick={display}/>
                <div className="by">Image by: <strong>LNLNLN</strong></div>
            </div>
            <div id="myModal" className="modal">
                <span className="close" onClick={close}>&times;</span>
                <img className="modal-content" id="img01" src='#'/>
            </div>
        </div>
    )
}
