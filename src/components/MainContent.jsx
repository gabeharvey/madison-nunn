import React from 'react';
import { Flex, Image, Text, VStack, HStack, Icon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
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

  // Animation for name on mount
  const pulseBounceProps = useSpring({
    from: { transform: 'scale(1) translateY(0)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'scale(2.4) translateY(-20px) rotateX(-50deg)' });
        await next({ transform: 'scale(1) translateY(0) rotateX(0deg)' });
      }
    },
    config: { mass: 5, tension: 150, friction: 12 },
  });

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
            backgroundColor: '#0A0A0A',
            backgroundImage: 'url("/tech-photo.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            border: '3px solid #FFD700',
            padding: '16px',
            boxShadow: "gray 10px 10px 10px",
          }}
        >
          <Flex direction="column" align="center" justify="center" height="100%">
            <Image
              borderRadius="md"
              boxSize="150px"
              src="/madison-pic-4.png"
              alt="Profile Image"
              mt={6}
              mb={2}
            />
            {/* Animated Name */}
            <animated.div style={pulseBounceProps}>
              <Text
                className='card-name'
                fontSize="3xl"
                fontWeight="bold"
                color="beige"
                fontFamily="'Pacifico', cursive"
                marginBottom='15px'
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
            <Text fontSize="md" color="beige" mb={4} fontFamily="'Pathway Extreme', sans-serif" fontWeight='bold'>
              Director of Women's Sports
            </Text>
            <VStack align="start" spacing={2} fontFamily="'Pathway Extreme', sans-serif">
              <HStack>
                <Icon as={FaEnvelope} color='white' />
                <Link href="mailto:madison@athletexelite.com" color='beige' fontWeight='bold'>madison@athletexelite.com</Link>
              </HStack>
              <HStack>
                <Icon as={FaPhone} color='green.300' />
                <Text color='beige' fontWeight='bold'>(210) 478-6918</Text>
              </HStack>
            </VStack>
            <Link href="https://www.athletexelite.com" isExternal _hover={{ textDecoration: 'none' }}>
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
            boxShadow: "gray 10px 10px 10px",
            marginBottom: '5px',
            textShadow: `
              0px 2px 4px rgba(184, 134, 11, 0.9),
              0px 4px 8px rgba(218, 165, 32, 0.8),
              0px 6px 12px rgba(255, 215, 0, 0.7),
              0px 8px 16px rgba(255, 239, 184, 0.6),
              0px 10px 20px rgba(255, 250, 205, 0.5)`
          }}
        >
          <Flex direction="column" align="center" justify="center" height="100%">
            <Text fontFamily="'Pacifico', cursive">Madison Nunn</Text>
            <Text fontSize={16} fontFamily="'Pathway Extreme', sans-serif" color='beige' textShadow='none' marginTop={9}>©2025 All Rights Reserved</Text>
          </Flex>
        </animated.div>
      </animated.div>
    </Flex>
  );
};

export default MainContent;
