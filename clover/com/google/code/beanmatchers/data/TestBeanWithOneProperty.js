var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":36,"id":1646,"methods":[{"el":9,"sc":3,"sl":7},{"el":13,"sc":3,"sl":11},{"el":25,"sc":3,"sl":15},{"el":30,"sc":3,"sl":27},{"el":35,"sc":3,"sl":32}],"name":"TestBeanWithOneProperty","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_104":{"methods":[{"sl":7},{"sl":11}],"name":"canGetPropertyFromBean","pass":true,"statements":[{"sl":8},{"sl":12}]},"test_106":{"methods":[{"sl":7},{"sl":11}],"name":"testHasValidGettersAndSettersFor","pass":true,"statements":[{"sl":8},{"sl":12}]},"test_109":{"methods":[{"sl":11},{"sl":27}],"name":"beanWithValidHashCodeShouldMatch","pass":true,"statements":[{"sl":12},{"sl":29}]},"test_120":{"methods":[{"sl":7},{"sl":11}],"name":"beanWithValidGettersAndSettersShouldMatch","pass":true,"statements":[{"sl":8},{"sl":12}]},"test_122":{"methods":[{"sl":11},{"sl":27}],"name":"beanWithValidHashCodeShouldMatch","pass":true,"statements":[{"sl":12},{"sl":29}]},"test_125":{"methods":[{"sl":27}],"name":"hashCodeShouldObtainTheHashCodeValueFromTargetBean","pass":true,"statements":[{"sl":29}]},"test_126":{"methods":[{"sl":7},{"sl":11}],"name":"beanWithValidGettersAndSettersShouldMatch","pass":true,"statements":[{"sl":8},{"sl":12}]},"test_128":{"methods":[{"sl":7},{"sl":11}],"name":"canUseSetterToSetPropertyValue","pass":true,"statements":[{"sl":8},{"sl":12}]},"test_144":{"methods":[{"sl":32}],"name":"propertyTypeShouldThrowExceptionGivenPropertyDoesNotExistOnBean","pass":true,"statements":[{"sl":34}]},"test_154":{"methods":[{"sl":32}],"name":"getPropertyShouldThrowExceptionGivenPropertyDoesNotExistOnBean","pass":true,"statements":[{"sl":34}]},"test_157":{"methods":[{"sl":11},{"sl":15}],"name":"equalsShouldCompareToTargetBeansAndReturnTrueGivenJavaBeanAndTargetBeansAreEqual","pass":true,"statements":[{"sl":12},{"sl":17},{"sl":18},{"sl":20},{"sl":22},{"sl":24}]},"test_17":{"methods":[{"sl":7},{"sl":11}],"name":"canSetPropertyOnBean","pass":true,"statements":[{"sl":8},{"sl":12}]},"test_19":{"methods":[{"sl":11},{"sl":32}],"name":"beanWithValidToStringShouldMatch","pass":true,"statements":[{"sl":12},{"sl":34}]},"test_32":{"methods":[{"sl":7},{"sl":11}],"name":"canUseGetterToObtainPropertyValue","pass":true,"statements":[{"sl":8},{"sl":12}]},"test_34":{"methods":[{"sl":7},{"sl":11}],"name":"testBeanHasValidGettersAndSettersFor","pass":true,"statements":[{"sl":8},{"sl":12}]},"test_45":{"methods":[{"sl":11},{"sl":15}],"name":"beanWithValidEqualsShouldMatch","pass":true,"statements":[{"sl":12},{"sl":17},{"sl":18},{"sl":20},{"sl":22},{"sl":24}]},"test_50":{"methods":[{"sl":15}],"name":"equalsShouldCompareToTargetBeanAndReturnTrueGivenBeansAreEqual","pass":true,"statements":[{"sl":17}]},"test_54":{"methods":[{"sl":32}],"name":"toStringShouldObtainTheToStringValueFromTargetBean","pass":true,"statements":[{"sl":34}]},"test_6":{"methods":[{"sl":11},{"sl":15}],"name":"equalsShouldCompareToTargetBeanAndReturnFalseGivenBeansAreNotEqual","pass":true,"statements":[{"sl":12},{"sl":17},{"sl":18},{"sl":20},{"sl":22}]},"test_60":{"methods":[{"sl":11},{"sl":32}],"name":"beanWithValidToStringShouldMatch","pass":true,"statements":[{"sl":12},{"sl":34}]},"test_61":{"methods":[{"sl":11},{"sl":15}],"name":"equalsShouldCompareToTargetBeansAndReturnFalseGivenJavaBeanAndTargetBeansAreNotEqual","pass":true,"statements":[{"sl":12},{"sl":17},{"sl":18},{"sl":20},{"sl":22}]},"test_83":{"methods":[{"sl":11},{"sl":15}],"name":"beanWithValidEqualsShouldMatch","pass":true,"statements":[{"sl":12},{"sl":17},{"sl":18},{"sl":20},{"sl":22},{"sl":24}]},"test_9":{"methods":[{"sl":32}],"name":"setPropertyShouldThrowExceptionGivenPropertyDoesNotExistOnBean","pass":true,"statements":[{"sl":34}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [106, 34, 17, 32, 128, 120, 104, 126], [106, 34, 17, 32, 128, 120, 104, 126], [], [], [61, 45, 106, 122, 34, 17, 32, 19, 128, 120, 104, 109, 126, 6, 60, 157, 83], [61, 45, 106, 122, 34, 17, 32, 19, 128, 120, 104, 109, 126, 6, 60, 157, 83], [], [], [61, 45, 50, 6, 157, 83], [], [61, 45, 50, 6, 157, 83], [61, 45, 6, 157, 83], [], [61, 45, 6, 157, 83], [], [61, 45, 6, 157, 83], [], [45, 157, 83], [], [], [122, 109, 125], [], [122, 109, 125], [], [], [9, 19, 154, 144, 54, 60], [], [9, 19, 154, 144, 54, 60], [], []]