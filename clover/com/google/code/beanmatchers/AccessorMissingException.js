var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":8,"id":147,"methods":[{"el":7,"sc":3,"sl":5}],"name":"AccessorMissingException","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_142":{"methods":[{"sl":5}],"name":"shouldThrowExceptionIfGetterIsMissing","pass":true,"statements":[{"sl":6}]},"test_30":{"methods":[{"sl":5}],"name":"beanWithMissingSetterShouldNotMatch","pass":true,"statements":[{"sl":6}]},"test_8":{"methods":[{"sl":5}],"name":"shouldThrowExceptionIfSetterIsMissing","pass":true,"statements":[{"sl":6}]},"test_99":{"methods":[{"sl":5}],"name":"beanWithMissingGetterShouldNotMatch","pass":true,"statements":[{"sl":6}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [142, 99, 8, 30], [142, 99, 8, 30], [], []]