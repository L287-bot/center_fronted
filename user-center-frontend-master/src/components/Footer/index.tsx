import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';


const Footer: React.FC = () => {
  const defaultMessage = '小白出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[

        {
          key: 'github',
          title: <><GithubOutlined/> 罗首成的 GitHub</>,
          href: 'https://github.com/L287-bot',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
