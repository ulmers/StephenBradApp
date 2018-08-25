# This file will take input and decide what variation of the model will run

# This file will take input and decide what variation of the model will run

# bifurcation options: gender, sex, chronic disease
# age   | total | male | female
# 0-18  | 3552  | 3698 | 3399
# 19-64 |

# chronic disease yes = 8800 annual spending

# TODO: organize cost data in an array instead of hardcoding individual values.
# TODO: add logic to the model

import json
import sys



def cost_model(age, gender, chronic):
    cost = 0

    # TODO: Could just store this in  a json file
    malecost = {'<18': 4955,
                '19-44': 4492,
                '45-64': 12332,
                '65-84': 22634,
                '85+': 40098,
                'avg': 9096}

    femalecost = {'<18': 4554,
                  '19-44': 7476,
                  '45-64': 13143,
                  '65-84': 26209,
                  '85+': 45110,
                  'avg': 11142}

    chronicaddition = 8800

    if chronic:
        if gender == "male":
            if age <= 18:
                cost = malecost['<18']
            elif age > 18 & age <= 44:
                cost = malecost['19-44']
            elif age > 44 & age <= 64:
                cost = malecost['45-64']
            elif age > 64 & age <= 84:
                cost = malecost['65-84']
            elif age >= 85:
                cost = malecost['85+']
            else:
                #basically an error catch
                cost = malecost['avg']
        else:
            if age <= 18:
                cost = femalecost['<18']
            elif age > 18 & age <= 44:
                cost = femalecost['19-44']
            elif age > 44 & age <= 64:
                cost = femalecost['45-64']
            elif age > 64 & age <= 84:
                cost = femalecost['65-84']
            elif age >= 85:
                cost = femalecost['85+']
            else:
                # basically an error catch
                cost = femalecost['avg']

        cost = cost + chronicaddition

    else:
        if gender == "male":
            if age <= 18:
                cost = malecost['<18']
            elif age > 18 & age <= 44:
                cost = malecost['19-44']
            elif age > 44 & age <= 64:
                cost = malecost['45-64']
            elif age > 64 & age <= 84:
                cost = malecost['65-84']
            elif age >= 85:
                cost = malecost['85+']
            else:
                #basically an error catch
                cost = malecost['avg']
        else:
            if age <= 18:
                cost = femalecost['<18']
            elif age > 18 & age <= 44:
                cost = femalecost['19-44']
            elif age > 44 & age <= 64:
                cost = femalecost['45-64']
            elif age > 64 & age <= 84:
                cost = femalecost['65-84']
            elif age >= 85:
                cost = femalecost['85+']
            else:
                # basically an error catch
                cost = femalecost['avg']

    print(cost)


# TODO: figure out way to take an optional array of arguments
# TODO: healthplan1 = {deductible, outofpocket, copay, premium, drugs}
def cost_comparison(cost, healthPlans):
    return healthPlanSelection

if __name__ == '__main__':
    # TODO: Uncomment json input
    # jsonString = sys.argv[1]
    # jsonObject = json.loads(jsonString)
    # ageInput = jsonObject['age']
    # genderInput = jsonObject['gender']
    # chronicInput = jsonObject['chronic']
    #

    ageInput = 22
    genderInput = "male"
    chronicInput = True

    cost_model(ageInput, genderInput, chronicInput)






