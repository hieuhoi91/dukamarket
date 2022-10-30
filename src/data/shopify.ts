import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SavingsIcon from '@mui/icons-material/Savings';
import HandshakeIcon from '@mui/icons-material/Handshake';

export interface IShopify {
  icon: any;
  tittle: string;
  content: string;
}

export const Shopify: IShopify[] = [
  {
    icon: LocalShippingIcon,
    tittle: 'FREE DELIVERY',
    content: 'For all orders over $120',
  },
  {
    icon: PaymentIcon,
    tittle: 'SAFE PAYMENT',
    content: '100% secure payment',
  },
  {
    icon: ContactSupportIcon,
    tittle: '24/7 HELP CENTER',
    content: 'If goods have problems',
  },
  {
    icon: SavingsIcon,
    tittle: 'SHOP WITH CONFIDENCE',
    content: 'If goods have problems',
  },
  {
    icon: HandshakeIcon,
    tittle: 'FRIENDLY SERVICES',
    content: 'If goods have problems',
  },
];
