console.log("Hello")
let accounts = [];
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}
$(".enableEthereumButton").click(function() {
    alert("启动狐狸钱包中")
        // ethereum.request({ method: 'eth_requestAccounts' });
    getAccount();
})
$(".sendEthButton").click(function() {
    let prices = (Number(100000000000000000000)).toString(16);
    let prices1 = '0x' + prices;
    console.log(prices1)
    ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [{
                from: accounts[0],
                to: '0x3A447B601B927Cd4a9980692f8d4f6f75E8b29D0',
                value: prices1,
                gasPrice: '0x09184e72a000',
                gas: '0x5208',
            }, ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.log(error));
})
let nu;
async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    // showAccount.innerHTML = account;
    nu = account;
    console.log(accounts)
    $(".showAccount").html(account)
}
ethereum.on('accountsChanged', function(accounts) {
    // Time to reload your interface with accounts[0]!
    getAccount();
});
ethereum.on('chainChanged', (chainId) => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have a very good reason not to.
    //    window.location.reload();
    console.log(chainId)
});

let web3 = new Web3(Web3.givenProvider || "ws://opsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
var contractabi = [{
        "inputs": [{
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_pAdd",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "_password",
                "type": "uint32"
            }
        ],
        "name": "addcompany",
        "outputs": [{
            "internalType": "uint32",
            "name": "kk",
            "type": "uint32"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_perinfor",
                "type": "string"
            },
            {
                "internalType": "uint32",
                "name": "_age",
                "type": "uint32"
            },
            {
                "internalType": "bool",
                "name": "guardian2",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "_obst",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "_password1",
                "type": "uint32"
            }
        ],
        "name": "addholder",
        "outputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint32",
                "name": "_ownerId",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_password",
                "type": "uint32"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_requirements",
                "type": "string"
            },
            {
                "internalType": "uint128",
                "name": "_price",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "_inprice",
                "type": "uint128"
            }
        ],
        "name": "additems",
        "outputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint32",
                "name": "_limit",
                "type": "uint32"
            },
            {
                "internalType": "address",
                "name": "_holdner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_benner",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "id7",
                "type": "uint32"
            }
        ],
        "name": "addpolicy",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "companyid",
        "outputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "name": "companys",
        "outputs": [{
                "internalType": "string",
                "name": "identity",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "companyOwner",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "password",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "id",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint32",
                "name": "id9",
                "type": "uint32"
            },
            {
                "internalType": "string",
                "name": "_requirements",
                "type": "string"
            }
        ],
        "name": "getIndemnity",
        "outputs": [{
            "internalType": "uint256",
            "name": "kk",
            "type": "uint256"
        }],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint32",
                "name": "_ids",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "psw",
                "type": "uint32"
            }
        ],
        "name": "getcompany",
        "outputs": [{
                "internalType": "string",
                "name": "a1",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "a2",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "a3",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "a4",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint32",
                "name": "_id4",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_password2",
                "type": "uint32"
            }
        ],
        "name": "getholder",
        "outputs": [{
                "internalType": "string",
                "name": "d1",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "d2",
                "type": "string"
            },
            {
                "internalType": "uint32",
                "name": "d3",
                "type": "uint32"
            },
            {
                "internalType": "string",
                "name": "d4",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "d5",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint32",
            "name": "_id2",
            "type": "uint32"
        }],
        "name": "getitems",
        "outputs": [{
                "internalType": "string",
                "name": "s1",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "s2",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "s3",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "s4",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "s5",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "s6",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint32",
            "name": "id8",
            "type": "uint32"
        }],
        "name": "getpolicy",
        "outputs": [{
                "internalType": "uint256",
                "name": "g1",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "g2",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "g3",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "g4",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "g5",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "g6",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "g7",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint32",
                "name": "idi",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_limit",
                "type": "uint32"
            }
        ],
        "name": "getprice",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "giveMEeth",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "name": "holder",
        "outputs": [{
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "personal_information",
                "type": "string"
            },
            {
                "internalType": "uint32",
                "name": "age",
                "type": "uint32"
            },
            {
                "internalType": "bool",
                "name": "guardian",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "Insured_object_status",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "holderOwner",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "password",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "holderid",
        "outputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "itemid",
        "outputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "name": "items",
        "outputs": [{
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "requirements",
                "type": "string"
            },
            {
                "internalType": "uint128",
                "name": "Price",
                "type": "uint128"
            },
            {
                "internalType": "address",
                "name": "publisherid",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "publisher",
                "type": "string"
            },
            {
                "internalType": "uint128",
                "name": "Insured_price",
                "type": "uint128"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "name": "policy",
        "outputs": [{
                "internalType": "uint256",
                "name": "starttime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "stoptime",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "holdner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "benner",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "Policy_status",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "Policy_type",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "Indemnity",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "requirement",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "policyid",
        "outputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "stateMutability": "view",
        "type": "function"
    }
];
var contract = new web3.eth.Contract(contractabi, "0xfbFB71Af357f8D85d6CdbF91877622aAf89Bbeb3");
console.log(contract);


//创建权限账户

async function getcompany(_index, pas) {
    contract.methods.getcompany(_index, pas).call({ from: accounts[0] }).then(
        function(result) {
            console.log("getcompany", result)
            $("#name" + _index).html(result.a1);
            $("#companyOwner" + _index).html(result.a2);
            $("#id" + _index).html(result.a4);
        }
    );

}
$(".addcompany").click(function() {
    let _identity = $("#identity").val();
    let _companyOwner = $("#companyOwner").val();
    let _password = $("#password").val();
    console.log(_identity, _companyOwner, _password);
    contract.methods.addcompany(_identity, _companyOwner, _password).send({ from: accounts[0] }).then(
        function(result) {
            contract.methods.companyid().call({ from: accounts[0] }).then(
                function(result) {
                    console.log("目前id", result)
                    let l = result - 1;
                    console.log(l);
                    $(".companyid").html("创建成功，id为" + l);
                }
            );
        }
    )
});
// $(".getcompany").click(function () {
// 	contract.methods.companyid().call({ from: accounts[0] }).then(
// 		function (result) {
// 			$('#box').children().remove();
// 			console.log("目前id", result)
// 			for (var i = 0; i < result; i++) {
// 				getcompany(i)
// 				var q1 = $('<div style="font-family:verdana;padding:2px;border-radius:10px;border:5px solid #EE872A;"><div style="color:#40B3DF;">职务:<span style="background-color:#0099FF;color:#ffffff;" id="name' + i + '"></span></div> <div style="color:#40B3DF;">地址:<span style="background-color:#0099FF;color:#ffffff;" id="companyOwner' + i + '"></span></div><div style="color:#40B3DF;">id:<span style="background-color:#0099FF;color:#ffffff;" id="id' + i + '"></span></div></div></br>');
// 				$('#box').append(q1);
// 			}
// 		}
// 	);
// });
$(".getcompany").click(function() {
    let cdf = $("#companyOwner1").val();
    let lo = $("#passwordijk").val();
    contract.methods.getcompany(cdf, lo).call({ from: accounts[0] }).then(
        function(result) {
            window.location.href = "company.html";
            $(location).attr("href", "company.html");
            console.log("getcompany", result)
            $("#name" + _index).html(result.a1);
            $("#companyOwner" + _index).html(result.a2);
            $("#id" + _index).html(result.a4);
        }
    );
});


//创建保险项目

async function getitems(_index) {
    contract.methods.getitems(_index).call({ from: accounts[0] }).then(
        function(result) {
            console.log("getitems", result)
            $("#idn" + _index).html(_index);
            $("#itemname" + _index).html(result.s1);
            $("#itemrequirements" + _index).html(result.s2);
            let nc = result.s3 / 1000000000000000000;
            $("#itemPrice" + _index).html(nc);
            $("#itemInsured_price" + _index).html(result.s4);
            $("#itempublisher" + _index).html(result.s5);
            $("#itempublisherid" + _index).html(result.s6);
        }
    );

}
$(".additems").click(function() {
    let _ownerId = $("#ownerId").val();
    let _password = $("#password").val();
    let _name = $("#name").val();
    let _requirements = $("#requirements").val();
    let _price = $("#price").val();
    let _inprice = $("#inprice").val();
    console.log(_ownerId, _password, _name, _requirements, _price, _inprice);
    contract.methods.additems(_ownerId, _password, _name, _requirements, _price, _inprice).send({ from: accounts[0] }).then(
        function() {
            console.log("成功");

        }
    )
});
$(".getitems").click(function() {
    contract.methods.itemid().call({ from: accounts[0] }).then(
        function(result) {
            console.log("目前id", result)
            for (var i = 0; i < result; i++) {
                getitems(i)
                var q2 = $('<div style="font-family:verdana;padding:2px;border-radius:10px;border:5px solid #EE872A;"><div style="color:#40B3DF;">保险id:<span style="background-color:#0099FF;color:#ffffff;" id="idn' + i + '"></span></div>		<div style="color:#40B3DF;">保险类型:<span style="background-color:#0099FF;color:#ffffff;" id="itemname' + i + '"></span></div>	<div style="color:#40B3DF;">保险要求:<span style="background-color:#0099FF;color:#ffffff;" id="itemrequirements' + i + '"></span></div>		<div style="color:#40B3DF;">保险价格:(<span style="background-color:#0099FF;color:#ffffff;" id="itemPrice' + i + '"></span>)元/每天</div>		<div style="color:#40B3DF;">保险价格:<span style="background-color:#0099FF;color:#ffffff;" id="itemInsured_price' + i + '"></span></div>		<div style="color:#40B3DF;">创建者:<span style="background-color:#0099FF;color:#ffffff;" id="itempublisher' + i + '"></span></div>		<div style="color:#40B3DF;">创建地址:<span style="background-color:#0099FF;color:#ffffff;" id="itempublisherid' + i + '"></span></div></div></br>');
                $('#box1').append(q2);
            }
        })

});



$(".addholder").click(function() {
    let _name = $("#name1").val();
    let _perinfor = $("#perinfor1").val();
    let _age = $("#age1").val();
    let guardian = $("#guardian").val();
    let _obst = $("#obst1").val();
    let _owner = $("#owner1").val();
    let _password1 = $("#password1").val();
    console.log(_name, _perinfor, _age, guardian, _obst, _owner, _password1);
    contract.methods.addholder(_name, _perinfor, _age, guardian, _obst, _owner, _password1).send({ from: accounts[0] }).then(
        function() {
            console.log("成功");
            contract.methods.holderid().call({ from: accounts[0] }).then(
                function(result) {
                    console.log("目前id", result)
                    let l = result - 1;
                    console.log(l);
                    $(".holderid").html("创建成功，id为" + l);
                }
            );

        }
    )
});
$(".getholder").click(function() {
    let _index = $("#idx").val();
    let passworda = $("#pasx").val();
    contract.methods.getholder(_index, passworda).call({ from: accounts[0] }).then(
        function(result) {
            window.location.href = "holder.html";
            $(location).attr("href", "holder.html");
            console.log("getholder", result);
            console.log("getholder", result.d1);
            $(".namea").html("姓名" + result.d1);
            $(".personal_information1a").html(result.d2);
            $(".agea").html(result.d3);
            $(".Insured_object_statusa").html(result.d4);
            $(".holderOwnera").html(result.d5);
        }
    );
});





$(".addpolicy").click(function() {
    let _limit = $("#limit").val();
    let _holdner = $("#_holdner").val();
    let _benner = $("#_benner").val();
    let id7 = $("#id7").val();
    // let nowtime =  Math.round(new Date() / 1000);
    // let time = _limit * 86400;
    // let alltime = nowtime +time;
    // console.log(alltime);
    console.log(_limit, _holdner, _benner, id7);
    contract.methods.getprice(id7, _limit).call({ from: accounts[0] }).then(
        function(result) {
            console.log("getprice", result)
            let prices = (Number(result)).toString(16);
            console.log(prices);
            let prices1 = '0x' + prices;
            console.log(prices1)
            contract.methods.addpolicy(_limit, _holdner, _benner, id7).send({ from: accounts[0], value: prices1, }).then(
                function() {
                    console.log("成功");
                    contract.methods.policyid().call({ from: accounts[0] }).then(
                        function(result) {
                            console.log("目前id", result)
                            let l = result - 1;
                            console.log(l);
                            $(".policyid").html("创建成功，id为" + l);
                        }
                    );
                }
            )
        }
    );
});
async function getpolicy(i) {
    contract.methods.getpolicy(i).call({ from: accounts[0] }).then(
        function(result1) {
            let mk = result1.g1;
            if (mk > 21) {
                let pp = accounts[0];
                let p1 = result1.g3;
                let p2 = result1.g4;
                console.log(eval(pp));
                console.log(eval(p1));
                console.log(eval(p2));
                if (eval(pp) == eval(p1)) {
                    console.log("id" + i);
                    $("#iu" + i).html("此保单id为" + i);
                    console.log("你是投保人");
                    console.log(result1);
                    $("#man" + i).html("此保单中您为投保人");

                    var timestart = result1.g1 * 1000;
                    console.log(timestart);
                    var newDate = new Date(timestart);
                    console.log(newDate);
                    $("#g1" + i).html(newDate);

                    var timestop = result1.g2 * 1000;
                    console.log(timestop);
                    var newDate1 = new Date(timestop);
                    console.log(newDate1);
                    $("#g2" + i).html(newDate1);

                    $("#g3" + i).html(result1.g3);
                    $("#g4" + i).html(result1.g4);
                    if (result1.g5) {
                        console.log("ok");
                        $("#g5" + i).html(result1.g5);
                    } else {
                        $("#g5" + i).html("flase");

                    }
                    $("#g6" + i).html(result1.g6);
                    $("#g7" + i).html(result1.g7);


                } else if (eval(pp) == eval(p2)) {
                    console.log("id" + i);
                    console.log("你是受益人")
                    console.log(result1);
                    $("#man" + i).html("此保单中您为受益人");

                    var timestart = result1.g1 * 1000;
                    console.log(timestart);
                    var newDate = new Date(timestart);
                    console.log(newDate);
                    $("#g1" + i).html(newDate);

                    var timestop = result1.g2 * 1000;
                    console.log(timestop);
                    var newDate1 = new Date(timestop);
                    console.log(newDate1);
                    $("#g2" + i).html(newDate1);

                    $("#g3" + i).html(result1.g3);
                    $("#g4" + i).html(result1.g4);

                    $("#g5" + i).html(result1.g5);
                    console.log(result1.g5);
                    $("#g6" + i).html(result1.g6);
                    $("#g7" + i).html(result1.g7);
                }
            } else if (mk < 21) {
                console.log("id" + i);
                console.log("wu");
            }

        }
    );
}
$(".getpolicy").click(function() {
    contract.methods.policyid().call({ from: accounts[0] }).then(
        function(result) {
            console.log("目前id", result)
            for (var i = 0; i < result; i++) {
                console.log("cishu" + i);
                getpolicy(i);

                var qp = $('<div style="font-family:verdana;padding:2px;border-radius:10px;border:5px solid #EE872A;"><div><h3 id="iu' + i + '"></h3></div><div><h3 id="man' + i + '"></h3></div><div style="color:#40B3DF;">保单开始时间：<span style="background-color:#0099FF;color:#ffffff;" id="g1' + i + '"></span></div><div style="color:#40B3DF;">保单结束时间：<span style="background-color:#0099FF;color:#ffffff;"id="g2' + i + '"></span></div><div style="color:#40B3DF;">投保人地址：<span style="background-color:#0099FF;color:#ffffff;"id="g3' + i + '"></span></div><div style="color:#40B3DF;">受益人地址：<span style="background-color:#0099FF;color:#ffffff;"id="g4' + i + '"></span></div><div style="color:#40B3DF;">保单是否有效：<span style="background-color:#0099FF;color:#ffffff;"id="g5' + i + '"></span></div><div style="color:#40B3DF;">保单类型：<span style="background-color:#0099FF;color:#ffffff;"id="g6' + i + '"></span></div><div style="color:#40B3DF;">保额：<span style="background-color:#0099FF;color:#ffffff;"id="g7' + i + '"></span></div><div> <input type="text" name="要求" id="requirements9" value="无慢性隐性病" /></div><button id="Btn_buy' + i + '"  onClick="getIndemnity(' + i + ')">申请赔款</button></div></br>');
                $('#box8').append(qp);
            }
        })
});

function getIndemnity(i) {
    let o = $("#requirements9").val();
    console.log(i, o.tostring)
    let k = o.string;

    contract.methods.getIndemnity(i, o).send({ from: accounts[0] }).then(
        function(result) {
            console.log(result);
        })
};
$(".getBalance").click(function() {
    contract.methods.getBalance().call({ from: accounts[0] }).then(
        function(result) {
            let kih = result;
            let uhg = kih / 1000000000000000000;
            $('#blance').html("当前合约中金额" + uhg);
        })
});
$(".giveMEeth").click(function() {
    let give = $("#give").val();
    let pricesss = give * 1000000000000000000;
    let pricess = (Number(pricesss)).toString(16);

    console.log(pricess);
    let prices12 = '0x' + pricess;
    contract.methods.giveMEeth().send({ from: accounts[0], value: prices12 }).then(
        function() {
            $('#chenggong').html("成功");
        })
});