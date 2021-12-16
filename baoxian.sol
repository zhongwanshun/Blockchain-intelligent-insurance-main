// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

contract baoxian {
    struct Insurance_items {
        //保险项目
        string name; //项目名
        string requirements; //要求
        uint128 Price; //价格
        address publisherid; //发行人
        string publisher; //发布者
        uint128 Insured_price; //保价
    }
    struct Insurance_policy {
        //保单
        uint256 starttime; //开始时间
        uint256 stoptime; //结束时间
        address holdner; //投保人地址
        address benner; //受益人地址
        bool Policy_status; //保单状态
        string Policy_type; //保险项目
        uint256 Indemnity; //赔款
        string requirement;
    }
    struct policy_holder {
        //投保人
        string name; //姓名
        string personal_information; //投保人信息
        uint32 age; //年龄
        bool guardian; //是否有监护人
        string Insured_object_status; //受保对象状态
        address holderOwner; //投保人地址id
        uint32 password; //密码
    }
    mapping(uint32 => Insurance_items) public items;
    mapping(uint32 => Insurance_policy) public policy;
    mapping(uint32 => policy_holder) public holder;

    struct company {
        //公司保险研发部
        string identity; //身份
        address companyOwner; //地址id
        uint32 password;
        uint32 id;
    }
    mapping(uint32 => company) public companys;
    uint32 public itemid = 0;
    uint32 public companyid = 0;
    uint32 public policyid = 0;
    uint32 public holderid = 0;

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function giveMEeth() public payable returns (bool) {
        return true;
    }

    function addcompany(
        string memory _name,
        address _pAdd,
        uint32 _password
    ) public returns (uint32 kk) {
        uint32 userId = companyid++;
        companys[userId].identity = _name;
        companys[userId].companyOwner = _pAdd;
        companys[userId].password = _password;
        companys[userId].id = userId;
        return userId;
    }

    function getcompany(uint32 _ids, uint32 psw)
        public
        view
        returns (
            string memory a1,
            address a2,
            uint32 a3,
            uint32 a4
        )
    {
        require(companys[_ids].password == psw);
        require(companys[_ids].companyOwner == msg.sender);
        a1 = companys[_ids].identity;
        a2 = companys[_ids].companyOwner;
        a3 = companys[_ids].password;
        a4 = companys[_ids].id;
        return (a1, a2, a3, a4);
    }

    function additems(
        uint32 _ownerId,
        uint32 _password,
        string memory _name,
        string memory _requirements,
        uint128 _price,
        uint128 _inprice
    ) public returns (uint32) {
        require(companys[_ownerId].companyOwner == msg.sender);
        require(companys[_ownerId].password == _password);
        uint32 id1 = itemid++;
        items[id1].name = _name;
        items[id1].requirements = _requirements;
        items[id1].Price = _price;
        items[id1].Insured_price = _inprice;
        items[id1].publisher = companys[_ownerId].identity;
        items[id1].publisherid = companys[_ownerId].companyOwner;
        return id1;
    }

    function getitems(uint32 _id2)
        public
        view
        returns (
            string memory s1,
            string memory s2,
            uint256 s3,
            uint256 s4,
            string memory s5,
            address s6
        )
    {
        s1 = items[_id2].name;
        s2 = items[_id2].requirements;
        s3 = items[_id2].Price;
        s4 = items[_id2].Insured_price;
        s5 = items[_id2].publisher;
        s6 = items[_id2].publisherid;
        return (s1, s2, s3, s4, s5, s6);
    }

    function addholder(
        string memory _name,
        string memory _perinfor,
        uint32 _age,
        bool guardian2,
        string memory _obst,
        address _owner,
        uint32 _password1
    ) public returns (uint32) {
        uint32 id3 = holderid++;
        holder[id3].name = _name;
        holder[id3].personal_information = _perinfor;
        holder[id3].age = _age;
        holder[id3].guardian = guardian2;
        holder[id3].Insured_object_status = _obst;
        holder[id3].holderOwner = _owner;
        holder[id3].password = _password1;
        return id3;
    }

    function getholder(uint32 _id4, uint32 _password2)
        public
        view
        returns (
            string memory d1,
            string memory d2,
            uint32 d3,
            string memory d4,
            address d5
        )
    {
        require(holder[_id4].password == _password2);
        require(holder[_id4].holderOwner == msg.sender);
        d1 = holder[_id4].name;
        d2 = holder[_id4].personal_information;
        d3 = holder[_id4].age;
        d4 = holder[_id4].Insured_object_status;
        d5 = holder[_id4].holderOwner;
        return (d1, d2, d3, d4, d5);
    }

    function getprice(uint32 idi, uint32 _limit) public view returns (uint256) {
        return uint256(items[idi].Price * _limit);
    }

    function addpolicy(
        uint32 _limit,
        address _holdner,
        address _benner,
        uint32 id7
    ) public payable returns (bool) {
        uint256 timestart = block.timestamp;
        uint256 timestop = _limit * 86400 + block.timestamp;
        require(msg.value == uint256(items[id7].Price * _limit));
        uint32 id6 = policyid++;
        policy[id6].starttime = timestart;
        policy[id6].stoptime = timestop;
        policy[id6].holdner = _holdner;
        policy[id6].benner = _benner;
        policy[id6].Policy_status = true;
        policy[id6].Policy_type = items[id7].name;
        policy[id6].Indemnity = items[id7].Insured_price;
        policy[id6].requirement = items[id7].requirements;
        return true;
    }

    function getpolicy(uint32 id8)
        public
        returns (
            uint256 g1,
            uint256 g2,
            address g3,
            address g4,
            bool g5,
            string memory g6,
            uint256 g7
        )
    {
        g1 = policy[id8].starttime;
        g2 = policy[id8].stoptime;
        g3 = policy[id8].holdner;
        g4 = policy[id8].benner;
        g5 = policy[id8].Policy_status;
        g6 = policy[id8].Policy_type;
        g7 = policy[id8].Indemnity;

        if (
            msg.sender == policy[id8].holdner ||
            msg.sender == policy[id8].benner
        ) {
            if (block.timestamp > policy[id8].stoptime) {
                policy[id8].Policy_status = false;
                return (g1, g2, g3, g4, g5, g6, g7);
            }
            return (g1, g2, g3, g4, g5, g6, g7);
        }
        g1 = 20;
        uint256 a3;
        address a4;
        address a5;
        bool a6;
        string memory a7;
        uint32 a8;
        return (g1, a3, a4, a5, a6, a7, a8);
    }

    function getIndemnity(uint32 id9, string memory _requirements)
        public
        payable
        returns (uint256 kk)
    {
        require(
            msg.sender == policy[id9].holdner ||
                msg.sender == policy[id9].benner
        );
        if (block.timestamp > policy[id9].stoptime) {
            policy[id9].Policy_status = false;
            return 2;
        } else if (
            keccak256(abi.encodePacked(_requirements)) ==
            keccak256(abi.encodePacked(policy[id9].requirement))
        ) {
            require(address(this).balance > policy[id9].Indemnity);
            address q = policy[id9].benner;
            payable(q).transfer(policy[id9].Indemnity);
            policy[id9].Policy_status = false;
            return 1;
        }

        return 0;
    }
}
