import React from 'react';
import Button from '@components/Button';
import Container from '@components/Container';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Container>
        <nav style={{ display: 'flex', minHeight: '50px', alignItems: 'center' }}>
          <div>
            <Button
              $variant='text'
              $size='large'
              onClick={() => navigate('/')}
              style={{ fontSize: '30px' }}
            >
              Logo
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'right',
                gap: '10px',
              }}
            >
              <Button onClick={() => navigate('/login')}>로그인</Button>
              <Button
                $color='warning'
                onClick={() => navigate('/signup')}
              >
                회원가입
              </Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
