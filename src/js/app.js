App = {
   web3Provider: null,
   contracts: {},
   account: '0x0',

   init: function() {
      return App.initWeb3();
   },

   initWeb3: function() {
      var status = $('#status');
      if (window.ethereum) {
         window.web3 = new Web3(ethereum);
         try {
            ethereum.enable();
         } catch (err) {
            $('#status').html('User denied account access', err);
         }
      } else if (window.web3) {
         window.web3 = new Web3(web3.currentProvider);
      } else {
         $('#status').html('No MetaMask (or other Web3 Provider) installed');
      }

      App.web3Provider = web3.currentProvider;

      return App.initContract();
   },

   initContract: function() {
      $.getJSON("Quiz.json", function(quiz) {
         App.contracts.Quiz = TruffleContract(quiz);
         App.contracts.Quiz.setProvider(App.web3Provider);
         App.listenForEvents();
         return App.render();
      });
   },

   listenForEvents: function() {
      App.contracts.Quiz.depolyed().then(function(instance) {
         instance.votedEvent({}, {
            fromBlock: 0,
            toBlock: 'latest'
         }).watch(function(error, event) {
            console.log("event triggered", event);
            App.render();
         });
      });
   },

   render: function() {
      //... continue code
   }
}
