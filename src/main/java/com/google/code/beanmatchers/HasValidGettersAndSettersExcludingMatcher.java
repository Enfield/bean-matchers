package com.google.code.beanmatchers;

import static java.util.Arrays.asList;

import java.util.List;
import org.hamcrest.Description;

public class HasValidGettersAndSettersExcludingMatcher<T> extends AbstractBeanAccessorMatcher<T> {
  private List<String> excludedProperties;

  HasValidGettersAndSettersExcludingMatcher(
      TypeBasedValueGenerator valueGenerator, String... excludedProperties) {
    super(valueGenerator);
    this.excludedProperties = asList(excludedProperties);
  }

  @Override
  protected boolean matches(Object item, Description mismatchDescription) {
    JavaBean bean = new JavaBean(item);
    List<String> properties = bean.properties();
    properties.removeAll(excludedProperties);
    return super.beanHasValidGetterAndSetterForProperties(bean, properties, mismatchDescription);
  }

  @Override
  public void describeTo(Description description) {
    if (excludedProperties.isEmpty()) {
      description.appendText("bean with valid setter and getter methods for all properties");
    } else {
      description.appendText(
          "bean with valid setter and getter methods for all properties excluding ");
      description.appendValue(excludedProperties);
    }
  }
}
