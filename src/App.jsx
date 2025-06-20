import { useState } from 'react'
import './App.css' // Ensure you have body { margin: 0; } here or in a global style
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const [count, setCount] = useState(0)

  // Define a slight overlap factor for backgrounds
  const backgroundFactor = 1.05; // Or 1.01, adjust as needed

  return (

    
    <div style={{ height: '100vh', width: '100%' }}>
      
    
      <Parallax pages={6} style={{ top: 0, left: 0 }}>
        {/* Page 1 Background */}
        <ParallaxLayer
          offset={0}
          speed={1.5}
          factor={backgroundFactor} // Apply overlap
          style={{
            backgroundImage: 'url(/bcg_1-01.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1, // Optional: ensure backgrounds are behind content
          }}
        />

        {/* Foreground logo on Page 1 */}
        <ParallaxLayer offset={0} speed={2.5} factor={1}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              height: '100%',
              padding: '7% 5% 0 0', // top, right, bottom, left padding
            }}
          >
            <img
              src="/prod_logo.png"
              alt="Product Logo"
              style={{ maxWidth: '65%', height: 'auto' }}
            />
          </div>

        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={2} factor={1}>
          <div>
            <div
              style={{
                width: '100vw',
                height: '250px', // or any height you want
                backgroundColor: '#0B1215', // change color as needed
                marginTop: '100vh', 
              }}
            />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={1.7} factor={1}>
          <div>
            <div
              style={{
                width: '100vw',
                height: '250px', // or any height you want
                backgroundColor: '#B27352', // change color as needed
                marginTop: '120vh', 
              }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={3} factor={1}>
          <div>
            <div
              style={{
                width: '100vw',
                height: '150px', // or any height you want
                backgroundColor: '#EAEAEC', // change color as needed
                marginTop: '140vh', 
                zIndex: 7,
              }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1.5} factor={1}>
          <div style={{zIndex: 7}}>
            <div
              style={{
                width: '100vw',
                height: '300px', // or any height you want

                marginTop: '100vh', 
                zIndex: 7, 
              }}
            />
          </div>
        </ParallaxLayer>

      
        {/* Page 2 Background */}
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={2} // Apply overlap
          style={{
            backgroundColor: '#242424', // Change to your desired color
            backgroundOpacity: 0, 
            zIndex: -10, // Optional
          }}
        />

      {/* SECTION 1 */}
        <ParallaxLayer offset={1} speed={1.25}>
          <div
            style={{
              width: '100vw',
              height: '175px',
              backgroundColor: '#0B1215',
              marginTop: '100vh',
              position: 'relative',
              zIndex: -7,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <div
            style={{
              position: 'relative',
              left: 0,
              width: '50vw',
              height: '750px',
              marginTop: '0px',
              zIndex: -9,
              backgroundImage: 'url(/7.png)',
              backgroundSize: 'fill',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <div
            style={{
              position: 'relative',
              left: '50vw',
              width: '50vw',
              height: '750px',
              marginTop: '0px',
              zIndex: -9,
              backgroundImage: 'url(/9.png)',
              backgroundSize: 'fill',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </ParallaxLayer>

        {/* SECTION 2 */}
        <ParallaxLayer offset={2} speed={0.5}>
          <div
            style={{
              position: 'relative',
              left: 0,
              width: '50vw',
              height: '750px',
              backgroundImage: 'url(/2.png)',
              backgroundSize: 'fill',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.75}>
          <div
            style={{
              position: 'absolute',
              left: '50vw',
              width: '50vw',
              height: '750px',
              marginTop: '0px',
              backgroundImage: 'url(/6.png)',
              backgroundSize: 'fill',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </ParallaxLayer>

        {/* SECTION 3 */}
        <ParallaxLayer offset={3} speed={0.75}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              width: '50vw',
              height: '750px',
              marginTop: '0px',
              backgroundImage: 'url(/9.png)',
              backgroundSize: 'fill',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <div
            style={{
              position: 'absolute',
              left: '50vw',
              width: '50vw',
              height: '750px',
              backgroundImage: 'url(/12.png)',
              backgroundSize: 'fill',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </ParallaxLayer>


              



        


        {/* Page 3 Background */}
        <ParallaxLayer
          offset={4}
          speed={1}
          factor={2}
          style={{
            backgroundColor: '#0B1215',
            backgroundImage: 'url(/btm.png)',
            backgroundSize: '75% 7%',       // or 'contain' if you don't want cropping
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -4,
          }}
        />


        <ParallaxLayer
          offset={5}
          speed={1}
          factor={2}
          style={{
            backgroundColor: '#0B1215',
          }}
        />

        
        
        

        {/* Page 2 Header */}
        

        {/* Page 3 Background */}
     

      </Parallax>
    </div>
  )
}

export default App