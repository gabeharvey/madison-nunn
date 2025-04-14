import React from 'react';
import { Flex, Image, Text, VStack, HStack, Icon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { useSpring, animated } from '@react-spring/web';

const MainContent = () => {
  const [flipped, setFlipped] = React.useState(false);

  const { transform, boxShadow } = useSpring({
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    boxShadow: flipped
      ? '0px 4px 20px rgba(0, 0, 0, 0.2)'
      : '0px 4px 20px rgba(0, 0, 0, 0.1)',
    config: { mass: 6, tension: 800, friction: 60 },
  });

  const handleFlip = () => {
    const flipSound = new Audio('/card-flip.mp3');
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ perspective: '1000px' }}
      onClick={handleFlip}
      cursor="pointer"
      backgroundColor='white'
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
          marginTop: "10px"
        }}
      >
        {/* Front Side of Business Card */}
        <animated.div
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#FF5E9C',
            backgroundImage: 'url("/tech-photo.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            border: '3px solid #800000',
            padding: '16px',
            boxShadow: "gray 10px 10px 10px",
          }}
        >
          <Flex direction="column" align="center" justify="center" height="100%">
            <Image
              borderRadius="md"
              boxSize="150px"
              src="/Madison-Nunn.png"
              alt="Profile Image"
              mt={6}
              mb={2}
            />
            <Text className='card-name' fontSize="3xl" fontWeight="bold" color="beige" fontFamily="'Pacifico', cursive" marginBottom= '15px' sx={{
                textShadow: `
                    0px 2px 4px rgba(128, 0, 0, 0.9),
                    0px 4px 8px rgba(199, 21, 133, 0.8),
                    0px 6px 12px rgba(255, 20, 147, 0.7),
                    0px 8px 16px rgba(255, 105, 180, 0.6),
                    0px 10px 20px rgba(255, 182, 193, 0.5)`,
            }}>
              Madison Nunn
            </Text>            
            <Text fontSize="lg" color="beige" mb={4} fontFamily="'Pathway Extreme', sans-serif">
              Director of Women's Sports
            </Text>
            <VStack align="start" spacing={2} fontFamily="'Pathway Extreme', sans-serif">
              <HStack>
                <Icon as={FaEnvelope} color='white'/>
                <Link href="mailto:madison@athletexelite.com" color='beige'>madison@athletexelite.com</Link>
              </HStack>
              <HStack>
                <Icon as={FaPhone} color='green.300'/>
                <Text color='beige'>(210) 478-6918</Text>
              </HStack>
              {/* <HStack>
                <Icon as={FaLinkedin} color='royalblue' />
                <Link href="https://www.linkedin.com/in/gabe-harvey-37ab90308/" isExternal color='beige'>linkedin.com/in/gabeharvey</Link>
              </HStack> */}
            </VStack>
            <Text fontSize="2xl" fontWeight='bold' color="beige" mb={4} mt={4} fontFamily="'Tilt Prism', sans-serif">
              Athlete X Elite
            </Text>
          </Flex>
        </animated.div>

        {/* Back Side of Business Card */}
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
            backgroundColor: '#FF5E9C',
            borderRadius: '10px',
            border: '3px solid #800000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'beige',
            fontSize: '2.1rem',
            fontFamily: "'Pacifico', cursive",
            fontWeight: 'bold',
            boxShadow: "gray 10px 10px 10px",
            marginBottom: '5px',
            textShadow: `
                0px 2px 4px rgba(128, 0, 0, 0.9),
                0px 4px 8px rgba(199, 21, 133, 0.8),
                0px 6px 12px rgba(255, 20, 147, 0.7),
                0px 8px 16px rgba(255, 105, 180, 0.6),
                0px 10px 20px rgba(255, 182, 193, 0.5)`,
          }}
        >
          <Flex direction="column" align="center" justify="center" height="100%">
            <Text>Madison Nunn</Text>
            <Text fontSize={16} fontFamily="'Pathway Extreme', sans-serif" color='beige' textShadow='none' marginTop={9}>©2025 All Rights Reserved</Text>
          </Flex>
        </animated.div>
      </animated.div>
    </Flex>
  );
};

export default MainContent;
