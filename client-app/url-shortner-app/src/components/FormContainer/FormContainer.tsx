import * as React from 'react';
import bgImage from '../../assets/bg.jpg';
import axios from "axios";
import { serverUrl } from '../../helpers/constants';

interface IFormContainerProps {
  updateReloadState:()=>void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const [fullUrl,setFullUrl]=React.useState<string>("");
  const { updateReloadState } = props;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl
      });
      
      if (response.status === 200 || response.status === 201) {
        setFullUrl("");
        updateReloadState();
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error submitting URL:", error);
      alert("Failed to add URL. Please try again.");
    }
  }
  return(
    <div className='container mx-auto p-2'>
        <div className='my-8 rounded bg-center' style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
        }}>
          <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
            <h2 className='text-white text-4xl text-center pb-4'>UrlShortner</h2>
            <p className='text-white text-center pb-2 text-xl font-extralight'>Paste your untidy link to shorten it</p>
            <p className='text-white text-center pb-4 text-sm font-thin'>free tool to shorten a URL or reduce link, Use our URL shortner to create a shortened & neat link making it easier to use.</p>
            <form onSubmit={handleSubmit}>
              <div className='flex'>
                <div className='relative w-full'>
                  <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>urlshortner.link</div>
                  <input type="text"
                   placeholder='add your link' 
                   required
                   className='block w-full p-4 ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 focus:border-blue-500'
                   value={fullUrl}
                   onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setFullUrl(e.target.value)}
                   />
                  <button type='submit' className='absolute top-0 h-full end-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'>Shorten URL</button>
                </div>
              </div>
            </form>

          </div>
            
        </div>
    </div>
  );
};

export default FormContainer; 