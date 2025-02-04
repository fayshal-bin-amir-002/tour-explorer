import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const TouristSpotCard = ({ spot }) => {

    const { _id, image, country_Name, tourist_spot_name, location, shortdescription, average_cost, seasonality } = spot;

    return (
        <div data-aos="zoom-in" data-aos-duration="1000">
            <div className="flex flex-col h-[600px] justify-between p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 border border-[#C6EBC5]">
                <div>
                    <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 flex justify-between items-center">
                        <p className='font-medium text-lg'>{country_Name}</p>
                        <span className="block text-sm font-semibold tracking-widest uppercase dark:text-violet-600">{tourist_spot_name}</span>
                    </div>
                    <div className="divider"></div>
                    <div className='flex justify-between items-center mb-4'>
                        <p className='flex items-center  gap-2'><IoLocationOutline /><span>{location}</span></p>
                        <p className='flex items-center gap-2 text-[#A1C398]'><RiMoneyRupeeCircleLine />{average_cost}k</p>
                        <p className='text-[#FA7070]'>{seasonality}</p>
                    </div>
                    <p className="dark:text-gray-800">{shortdescription.length>60 ? shortdescription.slice(0,60)+'...':shortdescription}</p>
                </div>
                <div className='pt-5'>
                    <Link to={`/spot-details/${_id}`}><button className='btn w-full bg-[#A1C398] text-white'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

TouristSpotCard.propTypes = {
    spot: PropTypes.object.isRequired
};

export default TouristSpotCard;