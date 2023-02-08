import { useState } from "react";
import { Button, Space } from 'antd';

const ImageList = ({list}) => {
    list=list.data
    const [targetImage, setTargetImage] = useState(list[0]);
    const [imageNumber, setImageNumber] = useState(0)
    const handleClick = (i) => {
        setTargetImage(list[i])
        setImageNumber(i);
        console.log(targetImage)
    }
    return ( 
        <div className="box">
            <div>
                {list.map((el,i) => (
                <div onClick={() => handleClick(i)} className="imageDiv">
                    <Button type="primary">Image {i}</Button>
                </div>
                ))}
            </div>
            <div>
                <img src={targetImage} width="500" height="600" className="targetImage"/>
                <div className="box"><h1>Image {imageNumber}</h1></div>
            </div>
        </div>
     );
}
 
export default ImageList;