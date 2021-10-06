pragma solidity =0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Katrade is ERC20Detailed, ERC20 {
    constructor() ERC20Detailed('Katrade', 'KTD', 18) public {}
    function faucet(uint _amount) public returns (bool){
        _mint(msg.sender, _amount); 
        return true;
    }
}