# This file will take input and decide what variation of the model will run

# chronic disease yes = 8800 annual spending
# TODO: Need to consider the best calculation model, easy change

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
                # basically an error catch
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
                # basically an error catch
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
    print("Total Cost:", cost)
    return cost

def cost_comparison(cost, healthplans):
    # assuming the data structure is:
    # healthplan = {'healthplan1': {'premium1': x,
    #                               'deductible1': y,
    #                               'copay1': z
    #                               'drugplan1': {<<might not be one num>>}},
    #               'healthplan2': {etc.}}
    healthPlanKeys = []
    for z in healthplans.keys():
        healthPlanKeys.append(z)

    outOfPocket = {}
    planCost = 0
    i = 0
    while i < healthplans.__len__():
        healthPlanNum = healthPlanKeys.__getitem__(i)
        planName = healthplans[healthPlanNum]['name']
        planDeductible = healthplans[healthPlanNum]['deductible']
        planoopmax = healthplans[healthPlanNum]['oopmax']
        planPremium = healthplans[healthPlanNum]['premium']
        planCopay = healthplans[healthPlanNum]['copay']
        planDrugPlan = healthplans[healthPlanNum]['drugplan']

        annualPremium = planPremium*12
        medicalExpense = cost - annualPremium

        # If its less than the deducitble then the cost is the cost
        if medicalExpense > planDeductible:
            planCost = annualPremium + planDeductible + \
                       ((medicalExpense-planDeductible)*planCopay) + \
                       ((medicalExpense-planDeductible)*planDrugPlan)
        else:
            planCost = cost

        # How to record the cost calculations:
        # append the final cost calculation to a new dict with name of plan as key?
        outOfPocket.__setitem__(planName, planCost)
        i = i + 1

    print("Out of Pocket Cost:", outOfPocket)
    return outOfPocket

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

    healthPlanInput = {'healthplan1': {'name': "Bronze",
                                       'premium': 40,
                                       'deductible': 2100,
                                       'oopmax': 4200,
                                       'copay': .1,
                                       'drugplan': .16},
                       'healthplan2':  {'name': "Silver",
                                        'premium': 120,
                                        'deductible': 1100,
                                        'oopmax': 4200,
                                        'copay': .1,
                                        'drugplan': .16}}

    costInput = cost_model(ageInput, genderInput, chronicInput)

    cost_comparison(costInput, healthPlanInput)






