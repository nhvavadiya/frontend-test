import Tooltip from "./Tooltip/Tooltip"
import { ToolTipContent } from "./ToolTipContent"

export const CustomCard = () => {
    const data = ['Flood zone 1', 'Flood zone 2', 'Flood zone 3']
    return (
        <div className="container">
            {data.map((data, i) => {
                return (
                    <div className="row" key={i}>
                        <div className="col d-flex justify-content-center mb-5" >
                            <Tooltip title='title' content={<ToolTipContent />} direction="left">
                                <div className='custom-card'>
                                    <div>
                                        <img src="Assets/Images/img1.png" alt="cardImg" className='img-fluid' />
                                    </div>
                                    <div className='card-checkbox'>
                                        <div className="form-check">
                                            <input className="form-check-input ABC" type="checkbox"/>
                                            <label className="form-check-label">
                                                {data}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}
