import { User } from 'phosphor-react';

const AccountDropdown = ({ toggleOpen }: any) => {
  return (
    <div className="" onClick={toggleOpen}>
      <User size={25} className="hover:text-teal-400" />
    </div>
  );
};

export default AccountDropdown;
