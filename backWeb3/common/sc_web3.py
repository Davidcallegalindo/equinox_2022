from argparse import ArgumentParser
import logging
import threading
import time
import web3
from web3 import Web3, HTTPProvider
import json
from eth_account import Account
import secrets
from time import sleep, perf_counter
import csv
import datetime
import logging
import sys
import time
from web3._utils.events import get_event_data
from web3.middleware import geth_poa_middleware

logging.basicConfig(filename='nft_p100.log', level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(sys.stdout))

abi_file = open('equinox.abi')
AIRDROP_SC_ABI = json.load(abi_file)
rpc = "https://rpc-mumbai.maticvigil.com/"
SC_ADDRESS = "0x1e401eD2E44F14595F238813011DAb56C5f65567"
OPERATIONAL_ADDRESS = "0x6A74324A51cC74B5C82F92154b63cb4d6F8B738A"
OPERATIONAL_PRIVATE_KEY = "3965f37dcba4b27ab31e6c6258c3a1a95f2de013ca8454fb4d37bced894f619c"


def verify_message(message):
    w3 = Web3(Web3.HTTPProvider(rpc))
    w3.middleware_onion.inject(geth_poa_middleware, layer=0)
    w3.eth.account.recover_message(message, )


def kill_seppiazz(token_id):
    # Use a breakpoint in the code line below to debug your script.

    w3 = Web3(Web3.HTTPProvider(rpc))
    w3.middleware_onion.inject(geth_poa_middleware, layer=0)

    contract = w3.eth.contract(address=SC_ADDRESS, abi=AIRDROP_SC_ABI)
    try:
        transaction = contract.functions.killit(int(token_id)).buildTransaction({
            'gas': 700000,
            'from': OPERATIONAL_ADDRESS,
            'nonce': w3.eth.get_transaction_count(OPERATIONAL_ADDRESS)

        })
        signed_tx = w3.eth.account.sign_transaction(transaction,
                                                    OPERATIONAL_PRIVATE_KEY)
        txn_hash = w3.eth.send_raw_transaction(signed_tx.rawTransaction)

        w3.eth.wait_for_transaction_receipt(txn_hash, timeout=360)
        logging.info(f'idTX : {txn_hash.hex()}, to: {OPERATIONAL_ADDRESS} sc_action: airdrop')
        return txn_hash

    except Exception as ex:
        logging.error(f'FAILED KILLIT for {OPERATIONAL_ADDRESS} Exception:\n {ex}')



