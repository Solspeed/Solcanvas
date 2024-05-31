import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';

const useAuthRedirect = () => {
  const { connected } = useWallet();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!connected && pathname !== '/' && pathname !== '/connect_wallet' && pathname !== '/connect_wallet/connecting' && pathname !== '/user_onboarding') {
      router.push('/connect_wallet');
    }
  }, [connected, pathname, router]);
};

export default useAuthRedirect;
