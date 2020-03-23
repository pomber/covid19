import pandas as pd
import requests
from requests_kerberos import HTTPKerberosAuth, OPTIONAL
from requests.packages.urllib3.exceptions import InsecureRequestWarning
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
kerberos_auth = HTTPKerberosAuth(mutual_authentication = OPTIONAL)

url = "https://pomber.github.io/covid19/timeseries.json"

scrape = requests.get(url, verify = False, auth = kerberos_auth)

get_jsondata = (scrape.json())

countries = list(get_jsondata.keys())

corona = pd.DataFrame()

for i  in countries:
    df = pd.DataFrame.from_dict(get_jsondata[i])
    df['country'] = i
    corona = corona.append(df, ignore_index=True)
