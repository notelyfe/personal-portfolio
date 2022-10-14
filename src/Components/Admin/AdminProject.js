import React, { useContext } from 'react'
import image from '../Assets/Vector.png'
import Context from '../context/Context'

const AdminProject = () => {

    const context = useContext(Context)
    const { modeStyle } = context

    setTimeout(() => {

        let upload_image = document.getElementById('addProductImage');
        let input = document.getElementById('upload');
        let drop = document.getElementById('drag-drop');
        let file;

        drop.addEventListener("drop", (event) => {
            event.preventDefault();
            file = event.dataTransfer.files[0];
            showFile();
        });

        drop.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        upload_image.onclick = () => {
            input.click();
        }

        input.addEventListener("change", function () {
            file = this.files[0];
            showFile();
        });

        function showFile() {
            let fileType = file.type;
            let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
            if (validExtensions.includes(fileType)) {
                let fileReader = new FileReader();
                fileReader.onload = () => {
                    let fileURL = fileReader.result;
                    let imgTag = `<img src="${fileURL}" alt="image" id="img">`;
                    drop.innerHTML = imgTag;
                }
                fileReader.readAsDataURL(file);
            }
        }

    }, 10);

    return (
        <div className="container admin-data-container rounded mt-3">
            <h1 className={`text-center text-${modeStyle.textColor}`}>Project</h1>
            <form className={`my-2 rounded p-2 text-${modeStyle.textColor}`} style={{ width: '350px', margin: 'auto', border: '2px solid #2C7090' }}>
                <div id="drag-drop" className='my-3'>
                    <img className='mt-3 placeholder-image' src={image} alt="placeholder" /><br />

                    <button className='btn btn-primary' id="addProductImage">Project Image</button><br />
                    <input type="file" id='upload' hidden />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="title"
                        className="form-label">
                        Project Title
                    </label>
                    <input
                        required
                        type="text"
                        className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
                        id="title"
                        aria-describedby="title"
                        style={{ border: '1px solid #2C7090' }} />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="projectLink"
                        className="form-label">
                        Project Link
                    </label>
                    <input
                        required
                        type="text"
                        className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
                        id="projectLink"
                        style={{ border: '1px solid #2C7090' }} />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="webLink"
                        className="form-label">
                        WebSite Link
                    </label>
                    <input
                        required
                        type="text"
                        className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
                        id="webLink"
                        style={{ border: '1px solid #2C7090' }} />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="description"
                        className="form-label">
                        Description
                    </label>
                    <textarea
                        required
                        rows={4}
                        type="text"
                        className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
                        id="description"
                        style={{ border: '1px solid #2C7090' }} />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary">
                    Upload
                </button>
            </form>
        </div>
    )
}

export default AdminProject
