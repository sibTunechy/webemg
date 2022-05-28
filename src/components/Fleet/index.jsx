import React from 'react';
import { FleetContainer, FleetWrap, FleetRows, Column1, FleetHead, Fleetdetails,Column2, ImgWrap, Img } from '../Fleet/FleetElements';

function Fleet({lightBg, id, imgStart, img, alt, dark, primary, darkText, lightText, lightTextDesc}) {
  return (
    <>
        <FleetContainer lightBg={lightBg} id={id}>
            <FleetWrap>
                <FleetRows imgStart={imgStart}>
                    <Column1>
                        <FleetHead>FLEET MANAGEMENT</FleetHead>
                        <Fleetdetails lightText={lightText}>Whether it's a financial lease, an operations lease, or any other lease solution, we build up structures and controls to run fleet operations and maximize profit. We handle operations
                            for your fleet using our innovative and professional employees, advanced technology, and pool of knowledge. To decrease theft and loss and improve operational efficiency, we identify, track and monitor
                            the condition of your cars in real time.
                            Depending on your specific needs, we provide a variety of tracking solutions. Our solutions will provide you a clear, thorough picyure of your fleet, reducing delays and expenses. We provide necessary products
                            and services to help you manage your fleet effectively and efficiently.
                        </Fleetdetails>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </FleetRows>
            </FleetWrap>
        </FleetContainer>
    </>
  )
}

export default Fleet;