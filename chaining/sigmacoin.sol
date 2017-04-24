contract Ec is usingOraclize{
  string public result;
  bytes32 public orclID;
  mapping(address => uint) public balances;
  address public sig;
  address public nuke;
  address public poolAddy;
  function Ec(address _nuke) {
    sig = msg.sender;
    nuke = _nuke;
  }
  // modifier auth (address auth){
  //   if (msg.sender == auth) {
  //     _;
  //   }else {
  //     throw;
  //   }
  // }
  function updateBal(address _addy, uint newBalance) payable returns (bool){
    if (msg.sender != sig ){
      throw;
    }else{
      balances[_addy] = newBalance;
      return true;
    }
  }
  function updatePool(address _addy) payable returns (bool){
    if (msg.sender != sig && msg.sender != nuke ){
      throw;
    }else{
      poolAddy = _addy;
      return true;}
  }
  function flip() payable{
    orclID = oraclize_query("WolframAlpha", "flip a coin");
  }
  function __callback(bytes32 orclID, string _result){
    if (msg.sender != oraclize_cbAddress()) throw;
    result = _result;
  }
}
