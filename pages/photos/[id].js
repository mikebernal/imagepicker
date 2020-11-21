import Head from "next/head"
import Link from "next/link"
import SITE_TITLE from "../index"

export default function Photo() {
    return (
        <>
            <Head>
                <title>{ SITE_TITLE }</title>
            </Head>

            <div className="container">

                {/* Breadcrumb */}
                <div className="breadcrumb"></div>

                <div className="two-cols">
                    
                    {/* Column 1 */}
                    <div className="cols50">

                        {/* Image holder */}
                        <div className="image-holder"></div>
                    </div>

                    {/* Column 2 */}
                    <div className="cols50">

                        {/* Image details */}
                        <div className="image-details">


                            {/* Row 1 */}
                            <div className="image-details--heading">

                                {/* Title */}
                                <div className="image-details--title"></div>

                                {/* CTA's */}
                                <div className="image-details--ctas"></div>
                            </div>


                            {/* Row 2 */}
                            <div className="image-details--author">

                                {/* Author */}
                                <div className="author">
                                    <div className="author--image"></div>
                                    <div className="author--name"></div>
                                    <div className="author--email"></div>
                                </div>

                                {/* Date */}
                                <div className="date">
                                    <div className="date--label"></div>
                                    <div className="date--value"></div>
                                </div>

                                {/* Stats */}
                                <div className="stats">
                                    {/* View */}
                                    <div className="stats--view">
                                        <div className="view--label"></div>
                                        <div className="view--count"></div>
                                        <div className="view--helper"></div>
                                    </div>

                                    {/* Download */}
                                    <div className="stats--download">
                                        <div className="download--label"></div>
                                        <div className="download--count"></div>
                                        <div className="download--helper"></div>
                                    </div>
                                </div>

                            </div>
                          

                            {/* Row 3 */}
                            <div className="image-details--camera">

                                {/* Column 1 */}
                                <div className="row">
                                    {/* Camera Make */}
                                    <div className="image-details--camera">
                                        <div className="camera--label"></div>
                                        <div className="camera--make"></div>
                                    </div>

                                    {/* Aperture */}
                                    <div className="image-details--aperture">
                                        <div className="aperture--label"></div>
                                        <div className="aperture--value"></div>
                                    </div>

                                    {/* Dimensions */}
                                    <div className="image-details--dimensions">
                                        <div className="dimensions--label"></div>
                                        <div className="dimensions--value"></div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="row">
                                    {/* Camera Model */}
                                    <div className="image-details--model">
                                        <div className="model--label"></div>
                                        <div className="model--value"></div>
                                    </div>

                                    {/* Shutter Speed */}
                                    <div className="image-details--shutter">
                                        <div className="shutter-label"></div>
                                        <div className="shutter-value"></div>
                                    </div>
                                </div>
                                

                                {/* Focal Length */}
                                <div className="image-details--focal">
                                    <div className="focal--label"></div>
                                    <div className="focal--value"></div>
                                </div>

                                {/* ISO */}
                                <div className="image-details--iso">
                                    <div className="iso--label"></div>
                                    <div className="iso--value"></div>
                                </div>

                            </div>
                           

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
