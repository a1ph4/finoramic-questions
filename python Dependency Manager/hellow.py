import json
import subprocess
import sys
import string

with open('dependencies.json') as f:
    data = json.load(f)
success =[]
failed =[]
present =[]
dependencies = data['Dependencies'].keys()

for key in dependencies:
    packeg = key+'=='+data['Dependencies'][key]
    res =''
    try:
        print('installing '+ packeg +'\n')
        reqs = subprocess.check_output([sys.executable, '-m', 'pip', 'install', packeg])
        res = reqs.decode("utf-8")
    except:
        failed.append(packeg)
        print('Error installing '+packeg+'\n')
        if(res.find('Successful') != -1):
            print('Successfully Installed '+packeg+'\n')
            success.append(packeg)
        elif (res.find('already satisfied') != -1):
            print(packeg+' Already Installed\n')
            present.append(packeg)

print('Installed:: ')
print(*success, sep='\n')
print ('\n')
print('Not installed:: ')
print(*failed, sep='\n')
print ('\n')
print('Already Installed:: ')
print(*present, sep='\n')
print ('\n')
