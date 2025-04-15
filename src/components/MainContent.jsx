import React from 'react';
import { Flex, Image, Text, VStack, HStack, Icon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { useSpring, animated } from '@react-spring/web';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const MainContent = () => {
  const [flipped, setFlipped] = React.useState(false);

  const { transform, boxShadow } = useSpring({
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    boxShadow: flipped
      ? '0px 4px 20px rgba(0, 0, 0, 0.2)'
      : '0px 4px 20px rgba(0, 0, 0, 0.1)',
    config: { mass: 6, tension: 800, friction: 60 },
  });

  const imageZoomProps = useSpring({
    from: { transform: 'scale(0.3)', filter: 'blur(100px)', opacity: 0 },
    to: { transform: 'scale(1)', filter: 'blur(0px)', opacity: 1 },
    config: { mass: 6, tension: 200, friction: 70 },
    delay: 600 
  });
  
  const handleFlip = () => {
    const flipSound = new Audio('/card-flip.mp3');
    flipSound.play();
    setFlipped(!flipped);
  };

  const pulseBounceProps = useSpring({
    from: {
      transform: 'scale(5) translateY(-200px) rotateX(0deg)',
      opacity: 0,
    },
    to: {
      transform: 'scale(1) translateY(0px) rotateX(0deg)',
      opacity: 1,
    },
    config: { mass: 5, tension: 280, friction: 24 },
  });  

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ perspective: '1000px' }}
      onClick={handleFlip}
      cursor="pointer"
      backgroundColor="white"
    >
      <animated.div
        style={{
          transformStyle: 'preserve-3d',
          transform,
          boxShadow,
          width: '300px',
          height: '400px',
          position: 'relative',
          borderRadius: '10px',
          transition: 'box-shadow 0.3s',
          marginTop: '10px',
        }}
      >
        {/* Front Side */}
        <animated.div
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#0A0A0A',
            backgroundImage: 'url("/tech-photo.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            border: '3px solid #FFD700',
            padding: '16px',
            boxShadow: 'gray 10px 10px 10px',
          }}
        >
          <Flex direction="column" align="center" justify="center" height="100%">
          <animated.img
            src="/madison-pic-4.png"
            alt="Profile Image"
            style={{
                borderRadius: '8px',
                width: '150px',
                height: '150px',
                marginTop: '15px',
                ...imageZoomProps
            }}
            />
            {/* Animated Name */}
            <animated.div style={{ ...pulseBounceProps, willChange: 'transform, opacity' }}>
                <Text
                    className="card-name"
                    fontSize="3xl"
                    fontWeight="bold"
                    color="beige"
                    fontFamily="'Pacifico', cursive"
                    marginBottom="15px"
                    marginTop="15px"
                    sx={{
                    textShadow: `
                        0px 2px 4px rgba(184, 134, 11, 0.9),
                        0px 4px 8px rgba(218, 165, 32, 0.8),
                        0px 6px 12px rgba(255, 215, 0, 0.7),
                        0px 8px 16px rgba(255, 239, 184, 0.6),
                        0px 10px 20px rgba(255, 250, 205, 0.5)`
                    }}
                >
                    Madison Nunn
                </Text>
            </animated.div>
            <Text
              fontSize="md"
              color="beige"
              mb={4}
              fontFamily="'Pathway Extreme', sans-serif"
              fontWeight="bold"
            >
              Director of Women's Sports
            </Text>

            <VStack align="start" spacing={2} fontFamily="'Pathway Extreme', sans-serif">
              <HStack>
                <Icon as={FaEnvelope} color="white" />
                <Link
                  href="mailto:madison@athletexelite.com"
                  color="beige"
                  fontWeight="bold"
                >
                  madison@athletexelite.com
                </Link>
              </HStack>
              <HStack>
                <Icon as={FaPhone} color="green.300" />
                <Text color="beige" fontWeight="bold">
                  (210) 478-6918
                </Text>
              </HStack>
            </VStack>

            <Link
              href="https://www.athletexelite.com"
              isExternal
              _hover={{ textDecoration: 'none' }}
            >
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="beige"
                mb={4}
                mt={4}
                fontFamily="'Tilt Prism', sans-serif"
                _hover={{
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease',
                }}
              >
                Athlete X Elite
              </Text>
            </Link>
          </Flex>
        </animated.div>

        {/* Back Side */}
        <animated.div
        style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: 'rotateY(180deg)',
            backgroundImage: 'url("/tech-photo.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#0A0A0A',
            borderRadius: '10px',
            border: '3px solid #FFD700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'beige',
            fontSize: '2.1rem',
            fontWeight: 'bold',
            boxShadow: 'gray 10px 10px 10px',
            marginBottom: '5px',
            textShadow: `
            0px 2px 4px rgba(184, 134, 11, 0.9),
            0px 4px 8px rgba(218, 165, 32, 0.8),
            0px 6px 12px rgba(255, 215, 0, 0.7),
            0px 8px 16px rgba(255, 239, 184, 0.6),
            0px 10px 20px rgba(255, 250, 205, 0.5)`,
        }}
        >
        <Flex direction="column" align="center" justify="center" height="100%">
            <Text fontFamily="'Pacifico', cursive">Madison Nunn</Text>
            <Flex gap={6} marginTop={9}>
            <a
                href="https://www.facebook.com/people/Athlete-X-Elite/61568944931104/?mibextid=LQQJ4d&rdid=TEUVJDRMaCDf59oU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17sXncDzHY%2F%3Fmibextid%3DLQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: 'transform 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                <FaFacebook size={36} color="#1877F2" />
            </a>
            <a
                href="https://www.instagram.com/athlete_x_elite"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: 'transform 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                <FaInstagram size={36} color="#E1306C" />
            </a>
            <a
                href="https://www.tiktok.com/@athlete_x_elite"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: 'transform 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                <FaTiktok size={36} color="#69C9D0" />
            </a>
            </Flex>
        </Flex>
        </animated.div>
      </animated.div>
    </Flex>
  );
};

export default MainContent;
