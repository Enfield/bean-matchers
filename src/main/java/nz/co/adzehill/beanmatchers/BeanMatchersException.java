package nz.co.adzehill.beanmatchers;

public class BeanMatchersException extends RuntimeException {
    public BeanMatchersException() {
    }

    public BeanMatchersException(String message) {
        super(message);
    }

    public BeanMatchersException(String message, Throwable cause) {
        super(message, cause);
    }

    public BeanMatchersException(Throwable cause) {
        super(cause);
    }
}